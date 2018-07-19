const express = require('express');
const request = require('request');

const app = express();
app.listen(3009, console.log('Started!'));

const access_token = 'EAAAAUaZA8jlABABfVnZCIRkJga4lgmmYRwZCxTpALfzGlGW4ZBsx4uUVPTc3pAKU9P7mzqdnL8E1L42xJHcrTlvzImbmqs8yXsiUQbNzlZBjJ3salaDDvNHV1pW1jqzeIXLUcwVGOTnuylZBjcAZAYO6ZBermonCg3oZD';
const urlGetInforMe = 'https://graph.facebook.com/me?&access_token=';
const urlGetInforUser = 'https://graph.facebook.com/v3.0/';
const urlPostComment = 'https://graph.facebook.com/{}/comments/?access_token={}&message={}'

function getMyInfor(url, access_token){
    return new Promise((resolve, reject) => {
        request(url + access_token, (err, res, body) => {
            if (err) reject(err);
            resolve(JSON.parse(body));
        });
    });
};
function getUserInfor(url, access_token, idUser){
    return new Promise((resolve, reject) => {
        request(`${url}/${idUser}&access_token=${access_token}`, (err, res, body) => {
            if (err) reject(err);
            resolve(JSON.parse(body));
        });
    });
};

function myComment(url, access_token, idPost, message) {
    return new Promise((resolve, reject) => {
        request.post({
            url: `https://graph.facebook.com/${idPost}/comments/?access_token=${access_token}&message=${message}`
        }, (err, res, body) => {
            if (err) reject(err);
            resolve(JSON.parse(body));
        });
    });
}

// myComment(urlPostComment, access_token, '128306154725239', 'Anh yeu em')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// getUserInfor(urlGetInforUser, access_token, '100011569322438')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// getMyInfor(urlGetInforMe, access_token)
// .then(data => console.log(data))
// .catch(err => console.log(err));