const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.set('views',`${__dirname}`);
app.set('view engine','pug');
app.get('/', (req, res) => {
    res.render('login.pug');
});
app.post('/login', (req, res) => {
    res.send(`Username:${req.body.username}\nPassword:${req.body.password}`);
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));