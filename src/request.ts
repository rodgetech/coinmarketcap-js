import axios, { AxiosResponse } from "axios";
import { stringify } from "query-string";
import { decamelizeKeys, camelizeKeys } from "humps";

export interface QueryParams {
  [key: string]: any;
}

class HTTPResponseError extends Error {
  response: AxiosResponse;

  constructor(response: AxiosResponse) {
    super(`HTTP Error Response: ${response.status} ${response.statusText}`);
    this.response = response;
  }
}

const checkStatus = (response: AxiosResponse) => {
  if (response.status >= 200 && response.status < 300) {
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
  apiKey: string,
  query?: QueryParams
): Promise<any> => {
  if (!apiKey) throw new Error("API key missing");

  const queryString = query ? stringify(decamelizeKeys(query)) : "";

  const url = `${apiBase}/${apiVersion}/${endpoint}?${queryString}`;

  const response = await axios.get(url, {
    headers: {
      "X-CMC_PRO_API_KEY": apiKey,
    },
  });

  try {
    const okResponse = checkStatus(response);
    const data = okResponse.data;
    const camelizedData = camelizeKeys(data, function (key, convert) {
      // prevent conversion of keys containing only uppercase letters or numbers
      return /^[A-Z0-9_]+$/.test(key) ? key : convert(key);
    });
    return camelizedData;
  } catch (error) {
    console.error(error);
    const errorBody = (error as HTTPResponseError).response.data;
    console.error(`Error body: ${errorBody}`);
  }
};
