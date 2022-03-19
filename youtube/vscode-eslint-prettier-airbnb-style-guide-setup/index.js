const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello');
    process.exit(1);
});

app.listen(3000, () => {
    console.log('APP LISTENING ON PORT 3000');
});

const obj = {
    hello: function () {
        console.log('hello');
    },
};
