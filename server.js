const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const root = __dirname;

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// allow and route contents that start with /static
app.use('/static', express.static(path.resolve(root, 'frontend', 'static')));

// server side handlers
app.post('/contact', (request, response) => {
    response.json({
        'message': `Form submission received with this data: ${request.body.name}`
    });
});

// parse every requests to index.html
app.get('/*', (request, response) => {
    response.sendFile(path.resolve(root, "frontend", "index.html"));
});

// launch app
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running at http://localhost:${port}...`));