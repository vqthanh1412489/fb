const request = require('request');

const convertAccessTokenToCookies = (access_token) => {
    const urlGetIdApp = 'https://graph.facebook.com/app';
    const urlGetSessionForApp = 'https://api.facebook.com/method/auth.getSessionforApp';
    return new Promise((resolve, reject) => {
        request({ url: urlGetIdApp, qs: { access_token } }, (err, res, body) => {
            const id = JSON.parse(body).id;
            console.log(id);
            request({
                url: urlGetSessionForApp,
                qs: {
                    access_token,
                    new_app_id: id,
                    format: 'json',
                    generate_session_cookies: '1'
                }
            }, (err, res, body) => {
                if (err) reject(err);
                resolve(body)
            });
        });
    });
}

module.exports = { convertAccessTokenToCookies };