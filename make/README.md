# invowerk for Make

Create XRechnung and EN 16931 e-invoices from your data, and read incoming XRechnung, ZUGFeRD and Factur-X invoices into fields.

The [invowerk](https://invowerk.dev) custom app for Make, version 1.0.4,
generated from the API's [OpenAPI document](../openapi.json). Connect it with
an API key: [create one](https://invowerk.dev/go/make?to=/app/api-keys).

| Module | What it does |
|---|---|
| `getMe` | Your plan, remaining requests, and remaining credits |
| `parseInvoice` | Read an e-invoice into JSON |
| `convertInvoice` | Convert an e-invoice between UBL and CII |
| `generateInvoice` | Create an e-invoice from JSON |
| `explainCodes` | Explain an error code |
| `renderInvoice` | Render an e-invoice as HTML |
| `validateInvoice` | Check an e-invoice |

## Layout

- `app.json`: the app, its connection and modules (`deploy.sh` reads it);
- `base.imljson`, `groups.json`, `help.md`: the app's base, module groups and help;
- `connection/`: the API-key connection's `parameters` and `api`;
- `modules/<name>/`: each module's `api`, `expect` (mappable parameters),
  `interface` and `samples`.

## Publish

Linked to the Make app `invowerk-g9ynof`. Releases of this repository run `deploy.sh`
(`.github/workflows/publish.yml`), which needs
[make-cli](https://www.npmjs.com/package/@makehq/cli) 1.4.0, `jq`,
`MAKE_API_KEY` and `MAKE_ZONE`. The app logo (a 512 px PNG) is set by hand in
Make's app settings.

Support: https://invowerk.dev/support
