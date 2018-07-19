const request = require('request');

request('https://www.facebook.com/309JS', (e, r, body) => {
    console.log(cutString(body, 'enabled:false,access_token:"','enabled:true,resumable_service_ove'));
});

function cutString(str, start, end){
    return str.substring(str.indexOf(start) + start.length, str.indexOf(end));
}