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

## API Methods

- [Cryptocurrency](#cryptocurrency)
  - [categories](#categories)
  - [category](#category)
  - [idMap](#idMap)
  - [info](#info)
  - [latestListings](#latestListings)
  - [latestQuotes](#latestQuotes)

## Cryptocurrency

### categories

Returns paginated data about all coin categories.

Options:

|         |          |
| ------- | -------- |
| id?     | `String` |
| start?  | `Number` |
| limit?  | `Number` |
| slug?   | `String` |
| symbol? | `String` |

Example:

```typescript
import { restClient } from "coinmarketcap-js";

const rest = restClient("API KEY");

try {
  const result = await rest.crypto.categories({ limit: 1, symbol: "BTC" });
} catch (error) {
  console.log(error);
}
```

### category

Returns data about a single coin category.

Options:

|            |          |
| ---------- | -------- |
| id         | `String` |
| start?     | `Number` |
| limit?     | `Number` |
| convert?   | `String` |
| convertId? | `String` |

Example:

```typescript
import { restClient } from "coinmarketcap-js";

const rest = restClient("API KEY");

try {
  const category = await rest.crypto.category({
    id: "categoryID",
    limit: 1,
  });
} catch (error) {
  console.log(error);
}
```

### idMap

Returns all or a paginated list of cryptocurrencies.

Options:

|                |          |
| -------------- | -------- |
| listingStatus? | `String` |
| start?         | `Number` |
| limit?         | `Number` |
| sort?          | `String` |
| symbol?        | `String` |
| aux?           | `String` |

Example:

```typescript
import { restClient } from "coinmarketcap-js";

const rest = restClient("API KEY");

try {
  const result = await rest.crypto.idMap({
    limit: 100,
  });
} catch (error) {
  console.log(error);
}
```

### info

Returns static data for one or many cryptocurrencies.

Options:

|          |          |
| -------- | -------- |
| id?      | `String` |
| slug?    | `String` |
| symbol?  | `String` |
| address? | `String` |
| aux?     | `String` |

Example:

```typescript
import { restClient } from "coinmarketcap-js";

const rest = restClient("API KEY");

try {
  const result = await rest.crypto.info({
    symbol: "BTC",
  });
} catch (error) {
  console.log(error);
}
```

### latestListings

Returns paginated list of all active cryptocurrencies along with latest market data.

Options:

|                       |          |
| --------------------- | -------- |
| start?                | `Number` |
| limit?                | `Number` |
| priceMin?             | `Number` |
| priceMax?             | `Number` |
| marketCapMin?         | `Number` |
| marketCapMax?         | `Number` |
| volume24hMin?         | `Number` |
| volume24hMax?         | `Number` |
| circulatingSupplyMin? | `Number` |
| circulatingSupplyMax? | `Number` |
| percentChange24hMin?  | `Number` |
| percentChange24hMax?  | `Number` |
| convert?              | `String` |
| convertId?            | `String` |
| sort?                 | `String` |
| sortDir?              | `String` |
| cryptocurrencyType?   | `String` |
| tag?                  | `String` |
| aux?                  | `String` |

Example:

```typescript
import { restClient } from "coinmarketcap-js";

const rest = restClient("API KEY");

try {
  const result = await rest.crypto.latestListings({
    limit: 50,
  });
} catch (error) {
  console.log(error);
}
```
