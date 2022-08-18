# coinmarketcap-js

A javascript SDK for interacting with the free version of the CoinMarketCap API.

## Install

```bash
npm install coinmarketcap-js
```

## Setup Client

```typescript
import { restClient } from "coinmarketcap-js";

const rest = restClient("API KEY");

// Can now use API
const idMapResult = await rest.crypto.idMap({ limit: 1 });
const infoResult = await rest.crypto.info({ symbol: "BTC" });
```

## API Methods Summary

- [Cryptocurrency](#cryptocurrency)
  - [categories](#categories)
  - [category](#category)
  - [idMap](#idMap)
  - [info](#info)
  - [latestListings](#latestListings)
  - [latestQuotes](#latestQuotes)

## Cryptocurrency

## categories

Returns paginated data about all coin categories available on CoinMarketCap.

Options:

|         |          |
| ------- | -------- |
| start?  | `Number` |
| limit?  | `Number` |
| id?     | `String` |
| slug?   | `String` |
| symbol? | `String` |

### Example

```typescript
import { restClient } from "coinmarketcap-js";

const rest = restClient("API KEY");

const categories = await rest.crypto.categories({ limit: 1, symbol: "BTC" });
```
