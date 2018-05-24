/*
1) GET: https://api.mercadolibre.com/sites

2) GET: https://api.mercadolibre.com/sites/MLC/categories

3) GET: https://api.mercadolibre.com/categories/MLC1648
"total_items_in_this_category": 412593

4) GET: https://api.mercadolibre.com/categories/hola
{
    "message": "Category not found: hola",
    "error": "not_found",
    "status": 404,
    "cause": []
}

5) GET: https://api.mercadolibre.com/users/MLA614845446
{
    "message": "Id must be a number",
    "error": "bad_request",
    "status": 400,
    "cause": []
}

6) PUT: https://api.mercadolibre.com/users/85313895
{ "first_name": "Pepe" }
{
    "message": "The User ID must match the consultant's",
    "error": "forbidden",
    "status": 403,
    "cause": []
}

7) PUT: https://api.mercadolibre.com/users/85313895
{ "first_name": "Pepe }

{
    "message": "Bad JSON format -> Error parsing JSON (Unterminated string at character 23 of { \"first_name\": \"Pepe })",
    "error": "bad_request",
    "status": 400,
    "cause": []
}

8) POST: https://api.mercadolibre.com/sites
{
    "message": "Method not allowed",
    "error": "method_not_allowed",
    "status": 405,
    "cause": []
}

9) GET: https://api.mercadolibre.com/sites/MLA/search

https://api.mercadolibre.com/sites/MLA/search?q='televisor'

https://api.mercadolibre.com/sites/MLA/search?q='televisor'&condition=new

https://api.mercadolibre.com/sites/MLA/search?q='televisor'&condition=new&price=0-400

https://api.mercadolibre.com/sites/MLA/search?q='televisor'&condition=new&price=0-400&has_pictures=yes

https://api.mercadolibre.com/sites/MLA/search?q='televisor'&condition=new&price=0-400&has_pictures=yes&sort=price_desc

10) GET: https://api.mercadolibre.com/items/MLA668807110
{
    "id": "MLA668807110",
    "site_id": "MLA",
    "title": "Measy Tv",
    "subtitle": null,
    "seller_id": 116649395,
    "category_id": "MLA2831",
    "official_store_id": null,
    "price": 400,
    "base_price": 400,
    "original_price": null,
    "currency_id": "ARS",
    "initial_quantity": 1,
    "available_quantity": 1,
    "sold_quantity": 0,
    "sale_terms": [],
    "buying_mode": "buy_it_now",
    "listing_type_id": "gold_special",
    "start_time": "2017-06-02T01:05:19.000Z",
    "stop_time": "2037-06-05T19:18:05.000Z",
    "condition": "new",
    "permalink": "https://articulo.mercadolibre.com.ar/MLA-668807110-measy-tv-_JM",
    "thumbnail": "http://mla-s1-p.mlstatic.com/887182-MLA25639173297_062017-I.jpg",
    "secure_thumbnail": "https://mla-s1-p.mlstatic.com/887182-MLA25639173297_062017-I.jpg",
    "pictures": [
        {
            "id": "887182-MLA25639173297_062017",
            "url": "http://mla-s1-p.mlstatic.com/887182-MLA25639173297_062017-O.jpg",
            "secure_url": "https://mla-s1-p.mlstatic.com/887182-MLA25639173297_062017-O.jpg",
            "size": "500x281",
            "max_size": "1200x675",
            "quality": ""
        },
        {
            "id": "956117-MLA25640108477_062017",
            "url": "http://mla-s1-p.mlstatic.com/956117-MLA25640108477_062017-O.jpg",
            "secure_url": "https://mla-s1-p.mlstatic.com/956117-MLA25640108477_062017-O.jpg",
            "size": "281x500",
            "max_size": "648x1152",
            "quality": ""
        },
        {
            "id": "710569-MLA25640114680_062017",
            "url": "http://mla-s1-p.mlstatic.com/710569-MLA25640114680_062017-O.jpg",
            "secure_url": "https://mla-s1-p.mlstatic.com/710569-MLA25640114680_062017-O.jpg",
            "size": "281x500",
            "max_size": "648x1152",
            "quality": ""
        },
        {
            "id": "928717-MLA25640108480_062017",
            "url": "http://mla-s1-p.mlstatic.com/928717-MLA25640108480_062017-O.jpg",
            "secure_url": "https://mla-s1-p.mlstatic.com/928717-MLA25640108480_062017-O.jpg",
            "size": "500x281",
            "max_size": "1152x648",
            "quality": ""
        }
    ],
    "video_id": null,
    "descriptions": [
        {
            "id": "MLA668807110-1358592983"
        }
    ],
    "accepts_mercadopago": true,
    "non_mercado_pago_payment_methods": [],
    "shipping": {
        "mode": "not_specified",
        "methods": [],
        "tags": [],
        "dimensions": null,
        "local_pick_up": true,
        "free_shipping": false,
        "logistic_type": "not_specified",
        "store_pick_up": false
    },
    "international_delivery_mode": "none",
    "seller_address": {
        "comment": "",
        "address_line": "",
        "zip_code": "",
        "city": {
            "id": "",
            "name": "caba"
        },
        "state": {
            "id": "AR-C",
            "name": "Capital Federal"
        },
        "country": {
            "id": "AR",
            "name": "Argentina"
        },
        "search_location": {
            "neighborhood": {
                "id": "",
                "name": ""
            },
            "city": {
                "id": "TUxBQ0NBUGZlZG1sYQ",
                "name": "Capital Federal"
            },
            "state": {
                "id": "TUxBUENBUGw3M2E1",
                "name": "Capital Federal"
            }
        },
        "latitude": -34.588024,
        "longitude": -58.475086,
        "id": 269946595
    },
    "seller_contact": null,
    "location": {},
    "geolocation": {
        "latitude": -34.588024,
        "longitude": -58.475086
    },
    "coverage_areas": [],
    "attributes": [],
    "warnings": [],
    "listing_source": "",
    "variations": [],
    "status": "active",
    "sub_status": [],
    "tags": [
        "good_quality_picture",
        "immediate_payment"
    ],
    "warranty": null,
    "catalog_product_id": null,
    "domain_id": "MLA-TELEVISIONS",
    "parent_item_id": null,
    "differential_pricing": null,
    "deal_ids": [],
    "automatic_relist": false,
    "date_created": "2017-06-02T01:05:19.000Z",
    "last_updated": "2017-07-18T22:27:09.000Z",
    "health": null
}
*/

//11 (Mercado libre)
/*
var rp = require('request-promise');

const options = {
    url: 'https://api.mercadolibre.com/categories/MLC1648',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    },
    json: true
};

rp(options)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

*/


//2 (Reqres)

let request = require('request-promise');
const fs = require('fs');

const options = {
    url: 'https://reqres.in/api/users/2',
    method: 'GET',
    json: true
};

request(options)
    .then((res) => saveAvatar(res.data.avatar))
    .catch((err) => console.log(err));

function saveAvatar(avatar) {
    request.get(avatar).then((res) => {
        fs.writeFile('avatar.jpg', res, (err) => {
            if (err) throw err;
            console.log(avatar + ' has been saved!');
        });
    });
}


//3 (MusixMatch)

const rp = require('request-promise');
const BASE_URL = 'http://api.musixmatch.com/ws/1.1';

const optionsmm = {
    uri: BASE_URL + '/artist.albums.get?artist_id=118',
    qs: {
        apikey: '487a658c7713a6b3ab5332c9ca488511',
        q_artist: 'Queen',
    },
    json: true
}

rp.get(optionsmm).then((res) => {
    let albums = res.message.body.album_list;
    console.log(albums);
}).catch((err) => console.log(err));