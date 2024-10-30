const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    x1 = Object.keys(req.query).map(k=>`${k}: ${req.query[k]}`).join('\n');
    res.send(x1);
});
app.post('/', (req, res) => {
    x2 = Object.keys(req.body).map(k=>`${k}: ${req.body[k]}`).join('\n');
    res.send(x2);
});
app.put('/', (req, res) => {
    x3 = Object.keys(req.body).map(k=>`${k}: ${req.body[k]}`).join('\n');
    res.send(x3);
});
app.delete('/', (req, res) => {
    x4 = Object.keys(req.body).map(k=>`${k}: ${req.body[k]}`).join('\n');
    res.send(x4);
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));