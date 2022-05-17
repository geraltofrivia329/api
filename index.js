const app = require('express')();
const port = 3000;

app.listen(
port,
() => console.log(`it's alive on http://localhost:${port}`)
)