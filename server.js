const express = require('express');
const path = require('path');

const app = express();

const root = __dirname;

app.use('/static', express.static(path.resolve(root, 'frontend', 'static')));

app.get('/*', (request, response) => {
    response.sendFile(path.resolve(root, "frontend", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running at http://localhost:${port}...`));