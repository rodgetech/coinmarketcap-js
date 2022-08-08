import fetch from "node-fetch";

class HTTPResponseError extends Error {
  response: Response;

  constructor(response: Response) {
    super(`HTTP Error Response: ${response.status} ${response.statusText}`);
    this.response = response;
  }
}

const checkStatus = (response: Response) => {
  if (response.ok) {
    // response.status >= 200 && response.status < 300
    return response;
  } else {
    throw new HTTPResponseError(response);
  }
};

export const invoke =
  (apiKey: string, apiBase: string, apiVersion: string, func: Function) =>
  (...args: any[]) =>
    func(apiKey, apiBase, apiVersion, ...args);

export const get = async (
  apiBase: string,
  endpoint: string,
  apiVersion: string,
  apiKey: string
): Promise<any> => {
  if (!apiKey) throw new Error("API key missing");

  const url = `${apiBase}/${apiVersion}/${apiKey}/${endpoint}`;

  const response = await fetch(url, {
    headers: {
      "X-CMC_PRO_API_KEY": apiKey,
    },
  });

  try {
    const okResponse = checkStatus(response);
    return await okResponse.json();
  } catch (error) {
    console.error(error);
    const errorBody = await (error as HTTPResponseError).response.text();
    console.error(`Error body: ${errorBody}`);
  }
};
