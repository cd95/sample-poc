const path = require('path');
const express = require('express');
const data = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/api/github', (req, res) => res.json(data.github));
app.get('/api/okta', (req, res) => res.json(data.okta));
app.get('/api/aws', (req, res) => res.json(data.aws));

// Serve the OpenAPI spec so it can be loaded into Swagger UI / Postman / etc.
app.get('/openapi.yaml', (req, res) =>
  res.type('application/yaml').sendFile(path.join(__dirname, '..', 'openapi.yaml'))
);

app.use((req, res) => res.status(404).json({ error: 'Not found' }));

app.listen(PORT, () => console.log(`datasource-poc listening on http://localhost:${PORT}`));
