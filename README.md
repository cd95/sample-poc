# Data Source POC

A dummy Node.js (Express) app that simulates reading data from different data sources. Each source exposes a single `GET` endpoint that returns a JSON array of flat records (as if read from a db table), with no nested objects.

| Endpoint | Description |
|---|---|
| `GET /api/github` | List of repository records |
| `GET /api/okta` | List of user records |
| `GET /api/aws` | List of EC2 instance records |
| `GET /health` | Health check |
| `GET /openapi.yaml` | The OpenAPI spec ([openapi.yaml](openapi.yaml)) |

To add a new source, add its data to [src/data.js](src/data.js), a route in [src/server.js](src/server.js), and a path in [openapi.yaml](openapi.yaml).

## Run without Docker

Requires Node.js 18+.

```bash
npm install
npm start
```

The server listens on port `3000`. Use `PORT=4000 npm start` to change it.

## Run with Docker

```bash
docker build -t datasource-poc .
docker run --rm -p 3000:3000 datasource-poc
```

To use a different host port, for example 4000: `docker run --rm -p 4000:3000 datasource-poc`.

## Try it

```bash
curl http://localhost:3000/api/github
curl http://localhost:3000/api/okta
curl http://localhost:3000/api/aws
curl http://localhost:3000/openapi.yaml
```

## OpenAPI spec

The spec is in [openapi.yaml](openapi.yaml). Import `http://localhost:3000/openapi.yaml` (or the file) into Swagger Editor, Postman, or any OpenAPI tool.
