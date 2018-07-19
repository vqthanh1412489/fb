const express = require('express');

const {convertAccessTokenToCookies} = require('./controller/convert.js');

const app = express();

const access_token = 'EAAAAUaZA8jlABAILA83VxhbVQFnL45PnwRok7fc9Bxm5g4N4XQReOrS71PuDWXGDQuKco7MW8YGxoHmcQhj8C4uclO0MRu1MQfkTZBoRlf3NFCUm0PzLgQM93NBZCMZA19XFCSKsInvFOKvLT8HvmAZBO2Y9PmTEZD';
app.listen(3009, console.log('Started!'));

app.get('/', (req, res) => {
    convertAccessTokenToCookies(access_token)
    .then(data => console.log(data))
    .catch(err => console.log(err));
    res.send('Success');
});






