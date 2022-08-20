# coinmarketcap-js

A javascript SDK for interacting with the free version of the CoinMarketCap API.

## Install

```bash
npm install coinmarketcap-js
```

## Quick Start

### Note: CommonJS usage

To take advantage of the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()`, use the following approach:

```js
const restClient = require("coinmarketcap-js").default;

const rest = restClient("API KEY");

// rest.<method> will now provide autocomplete and parameter typings
```

### ESM usage

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
- [Fiat](#fiat)
  - [idMap](#idMap-1)
- [Exchange](#exchange)
  - [info](#info-1)
  - [idMap](#idMap-2)
- [Global](#global)
  - [latestQuotes](#latestQuotes-1)
- [Tools](#tools)
  - [priceConversion](#priceConversion)

## Cryptocurrency

### categories

Returns paginated data about all coin categories.

Options `Object?`:

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

Options `Object`:

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

Options `Object?`:

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
  const result = await rest.crypto.idMap({ limit: 100 });
} catch (error) {
  console.log(error);
}
```

### info

Returns static data for one or many cryptocurrencies.

Options `Object?`:

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
  const result = await rest.crypto.info({ symbol: "BTC" });
} catch (error) {
  console.log(error);
}
```

### latestListings

Returns paginated list of all active cryptocurrencies along with latest market data.

Options `Object?`:

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
  const result = await rest.crypto.latestListings({ limit: 50 });
} catch (error) {
  console.log(error);
}
```

### latestQuotes

Returns the latest market quote data for one or many cryptocurrencies.

Options `Object?`:

|              |           |
| ------------ | --------- |
| id?          | `Number`  |
| slug?        | `String`  |
| symbol?      | `String`  |
| convert?     | `String`  |
| convertId?   | `String`  |
| aux?         | `String`  |
| skipInvalid? | `Boolean` |

Example:

```typescript
import { restClient } from "coinmarketcap-js";

const rest = restClient("API KEY");

try {
  const result = await rest.crypto.latestQuotes({ symbol: "BTC" });
} catch (error) {
  console.log(error);
}
```

## Fiat

### idMap

Returns data about fiat currencies with unique CoinMarketCap ids.

Options `Object?`:

|                |           |
| -------------- | --------- |
| start?         | `Number`  |
| limit?         | `Number`  |
| sort?          | `String`  |
| includeMetals? | `Boolean` |

Example:

```typescript
import { restClient } from "coinmarketcap-js";

const rest = restClient("API KEY");

try {
  const result = await rest.fiat.idMap({ limit: 1 });
} catch (error) {
  console.log(error);
}
```

## Exchange

### info

Returns static data for one or more exchanges.

Options `Object?`:

|       |          |
| ----- | -------- |
| id?   | `String` |
| slug? | `String` |
| aux?  | `String` |

Example:

```typescript
import { restClient } from "coinmarketcap-js";

const rest = restClient("API KEY");

try {
  const result = await rest.exchange.info({ id: "270" });
} catch (error) {
  console.log(error);
}
```

### idMap

Returns a paginated list of all active cryptocurrency exchanges per CoinMarketCap ID

Options `Object?`:

|                |          |
| -------------- | -------- |
| listingStatus? | `String` |
| slug?          | `String` |
| start?         | `Number` |
| limit?         | `Number` |
| sort?          | `String` |
| aux?           | `String` |
| cryptoId?      | `String` |

Example:

```typescript
import { restClient } from "coinmarketcap-js";

const rest = restClient("API KEY");

try {
  const result = await rest.exchange.idMap({ limit: 1 });
} catch (error) {
  console.log(error);
}
```

## Global

### latestQuotes

Returns the latest global cryptocurrency market metrics.

Options `Object?`:

|            |          |
| ---------- | -------- |
| convert?   | `String` |
| convertId? | `String` |

Example:

```typescript
import { restClient } from "coinmarketcap-js";

const rest = restClient("API KEY");

try {
  const result = await rest.global.latestQuotes();
} catch (error) {
  console.log(error);
}
```

## Tools

### priceConversion

Convert provided amount of one cryptocurrency or fiat currency into one or more different currencies using the latest market rate for each currency.

Options `Object`:

|            |          |
| ---------- | -------- |
| amount     | `Number` |
| id?        | `String` |
| symbol?    | `String` |
| time?      | `String` |
| convert?   | `String` |
| convertId? | `String` |

Example:

```typescript
import { restClient } from "coinmarketcap-js";

const rest = restClient("API KEY");

try {
  const result = await rest.tools.priceConversion({
    amount: 100,
    symbol: "BTC",
  });
} catch (error) {
  console.log(error);
}
```
