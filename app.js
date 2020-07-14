const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) =>res.sendFile(__dirname + '/views/index.html'));
app.get('/login', (req, res) =>res.sendFile(__dirname + '/views/login.html'));
app.post('/register', (req, res) => {
    res.send(req.body);
});

app.get('/register', (req, res) =>res.sendFile(__dirname + '/views/register.html'));

app.listen(3000,()=>console.log('localhost:3000'));