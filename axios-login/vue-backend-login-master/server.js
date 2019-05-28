const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = [{
    username: 'scars',
    password: '1234567',
    name: '姚偉揚',
}, {
    username: 'charlie',
    password: '7654321',
    name: '查理',
}];


app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/exists/:username', (req, res) => {
    const { username } = req.params;
    const user = users.find(u => u.username === username);
    res.json({
        exists: user !== undefined,
    });
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => (
        u.username === username && u.password === password
    ));
    if (user) {
        res.json({
            success: true,
            name: user.name,
        });
    } else {
        res.json({
            success: false,
        });
    }
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});


// app.listen(process.env.PORT || 3000, () => console.log('app started'));