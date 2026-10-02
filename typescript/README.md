# invowerk — TypeScript SDK

TypeScript client for the invowerk API: validate XRechnung, ZUGFeRD, Factur-X and Peppol BIS e-invoices from your code or CI.

```sh
npm install @invowerk-dev/sdk
```

[Get an API key](https://invowerk.dev/go/npm-sdk?to=/app/api-keys) and set it once:

```ts
import { client, getMe } from '@invowerk-dev/sdk';

client.setConfig({ auth: process.env.INVOWERK_API_KEY });
const { data, error } = await getMe();
```

Every operation is a function taking `{ path, query, body }`; file fields take a `Blob` or `File`. Requests go to `https://api.invowerk.dev` (`client.setConfig({ baseUrl })` to change it).

## Operations

| Function | Endpoint | What it does |
|---|---|---|
| `getMe` | `GET /v1/me` | Your plan, remaining requests, and remaining credits |
| `parseInvoice` | `POST /v1/parse` | Read an e-invoice into JSON |
| `convertInvoice` | `POST /v1/convert` | Convert an e-invoice between UBL and CII |
| `generateInvoice` | `POST /v1/generate` | Create an e-invoice from JSON |
| `explainCodes` | `GET /v1/explain` | Explain an error code |
| `renderInvoice` | `POST /v1/render` | Render an e-invoice as HTML |
| `validateInvoice` | `POST /v1/validate` | Check an e-invoice |

Generated with @hey-api/openapi-ts from [`openapi.sdk.json`](../openapi.sdk.json). API reference: https://invowerk.dev/docs · Support: https://invowerk.dev/support
