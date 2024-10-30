const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.get('/factorial', (req, res) => {
    res.redirect(`/factorial/${req.query.number}`);
});
app.get('/factorial/:number', (req, res) => {
    t = 1;
    for (i = req.params.number;i > 1;i--) t *= i;
    res.send(`${t}`);
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));