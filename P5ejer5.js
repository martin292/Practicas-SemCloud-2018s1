//5
var rp = require('request-promise');
const request = require('request');

const options = {
    url: 'https://www.reddit.com/r/funny.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    },
    json: true
};

/*
request(options, function(err, res, body){
    let json = JSON.parse(body);
    console.log(json);
});
*/

rp(options)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));