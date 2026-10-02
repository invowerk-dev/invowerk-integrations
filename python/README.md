# invowerk — Python SDK

Python client for the invowerk API: validate XRechnung, ZUGFeRD, Factur-X and Peppol BIS e-invoices from your code or CI.

```sh
pip install invowerk
```

[Get an API key](https://invowerk.dev/go/pypi-sdk?to=/app/api-keys) and pass it to the client:

```python
import os

from invowerk import AuthenticatedClient
from invowerk.api.account import get_me

client = AuthenticatedClient(
    base_url="https://api.invowerk.dev",
    token=os.environ["INVOWERK_API_KEY"],
    auth_header_name="X-API-Key",
    prefix="",
)
print(get_me.sync(client=client))
```

Every operation is a module with `sync`, `sync_detailed`, `asyncio` and `asyncio_detailed`; file fields take a `invowerk.types.File(payload=..., file_name=..., mime_type=...)`.

## Operations

| Operation | Module | What it does |
|---|---|---|
| `GET /v1/me` | `invowerk.api.account.get_me` | Your plan, remaining requests, and remaining credits |
| `POST /v1/parse` | `invowerk.api.transform.parse_invoice` | Read an e-invoice into JSON |
| `POST /v1/convert` | `invowerk.api.transform.convert_invoice` | Convert an e-invoice between UBL and CII |
| `POST /v1/generate` | `invowerk.api.generation.generate_invoice` | Create an e-invoice from JSON |
| `GET /v1/explain` | `invowerk.api.rules.explain_codes` | Explain an error code |
| `POST /v1/render` | `invowerk.api.rendering.render_invoice` | Render an e-invoice as HTML |
| `POST /v1/validate` | `invowerk.api.validation.validate_invoice` | Check an e-invoice |

Generated with openapi-python-client from [`openapi.sdk.json`](../openapi.sdk.json). API reference: https://invowerk.dev/docs · Support: https://invowerk.dev/support
