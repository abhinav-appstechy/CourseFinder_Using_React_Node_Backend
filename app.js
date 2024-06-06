const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()
app.use(cors());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());


app.post("/search-course", (req, res)=>{
    try {
        const query = req.body.query;
        fetch(`https://www.udemy.com/api-2.0/search-courses/?src=ukw&q=${query}`, {
            "headers": {
              "accept": "application/json, text/plain, */*",
              "accept-language": "en-US,en;q=0.9",
              "cache-control": "no-cache",
              "pragma": "no-cache",
              "priority": "u=1, i",
              "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-requested-with": "XMLHttpRequest",
              "x-udemy-cache-brand": "FRen_US",
              "x-udemy-cache-campaign-code": "",
              "x-udemy-cache-device": "None",
              "x-udemy-cache-language": "en",
              "x-udemy-cache-logged-in": "0",
              "x-udemy-cache-marketplace-country": "FR",
              "x-udemy-cache-price-country": "FR",
              "x-udemy-cache-release": "c1bd6cdc4b40c5b188df",
              "x-udemy-cache-user": "",
              "x-udemy-cache-version": "1",
              "cookie": "__udmy_2_v57r=224cd4dc2e9a4a348d3d37e50e4a5d8c; csrftoken=GewKP6uzu9BB2qXZITHtlklRBa1jd6Zefb4mFhqEY5jOKAebL7xPbmLa82Z5iozG; ud_cache_campaign_code=\"\"; ud_cache_marketplace_country=FR; ud_cache_price_country=FR; ud_cache_release=c1bd6cdc4b40c5b188df; ud_cache_user=\"\"; ud_cache_version=1; ud_cache_device=None; ud_cache_logged_in=0; __cf_bm=S27.GVt9hJQP2sj3BEUUsO722X4o30VY9opLh4DTfek-1717657234-1.0.1.1-L0YThbU6XU9uiYE_l.Q97p.jnVFeyD_cR34fwjAmk4hBw3rpwKLJHW6o4B6AIkBu4ppOnbhsNxca9NNmk8AtRA; __cfruid=1e48e25b9d0416114b6e09427bf74219b66aebb1-1717657234; OptanonAlertBoxClosed=2024-06-06T07:00:44.194Z; cf_clearance=FJKqyCWHd0HLjWB_lmHGAAJSgIaB38PrtVuyyh0WhUg-1717657242-1.0.1.1-eKL.AErlp4jhepWOoZ8OvS02rH0MdCNofSzpFCZECUc3tIZoiB82vvo_u.FfKIIFDPSonvzPv8VT5YwNYbC1rA; __ssid=ac115853030fcb11856ba26610be6f4; _ga=GA1.1.601335357.1717657246; ud_firstvisit=2024-06-06T07:00:45.640369+00:00:1sF777:tx64w5kZYnbIgKrqJA49QEfIpn8; __stripe_mid=6ab1655c-ba6b-4193-8637-5a4d0368be445f980b; __stripe_sid=29b92e5b-d48c-4392-b24d-26dddf2b896ab335d8; query_session_identifier_id=VqDjJTNhQ9aOqduo1qht5g; last_searched_phrase=23eeeb4347bdd26bfc6b7ee9a3b755dd; ud_cache_brand=FRen_US; ud_cache_language=en; OptanonConsent=isGpcEnabled=0&datestamp=Thu+Jun+06+2024+12%3A31%3A03+GMT%2B0530+(India+Standard+Time)&version=202402.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=6395f72b-86e0-4127-b955-70203e409dc9&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0003%3A1%2CC0005%3A1%2CC0004%3A1%2CC0001%3A1%2CC0002%3A1&geolocation=FR%3BIDF&AwaitingReconsent=false; _ga_7YMFEFLR6Q=GS1.1.1717657246.1.1.1717657268.0.0.1034381541; FPAU=1.2.1840689173.1717657269; eventing_session_id=MWQ1ZjA2NjEtYzA2OS00YW-1717659588209; evi=\"3@YlZWAZgwfsLD-HoV2paGxAoQldOxdw7vCSG2--w033FnHczCUpgqvwKCQR7mQQV9-NJthXRkm__g_rTIk8Jp7kREQgrjNcDcMsU=\"; ud_rule_vars=\"eJx9jtEKwjAMRX9l9FUdWZtttt8yKLHNtKgU284X8d8tqCAoQl4S7jk3N1Eo7bmwt9eQQ4nJSInOo3eSNSEp3Hrl1cg9MFLvt864GI-BhWnEbRJzSLk8Weup8FTvk5AgcQNDnQZGA2CUanvUCGpVF4BJrGvqRBUtcXEHWxLNc3A2xyU5tldKgXanly1z_AASXxbOf9q06XWLegQlv9pc9Wd-_VvC-behMzC0iLqT3dtwF_cHuRxY4w==:1sF7G3:KzOvXve0lK5vNu8JgzhtE7bVtlA\"; _dd_s=rum=0&expire=1717658701024",
              "Referer": `https://www.udemy.com/courses/search/?src=ukw&q=${query}`,
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
          })
          .then((res)=>{
            return res.json();
          })
          .then((data)=>{
            return res.status(200).json({
                status: "success",
                data: data
            })
            
          })
          .catch((error)=>{
            console.log(error)
          })
    } catch (error) {
        res.status(500).json({
            status:"error",
            
        })
    }
})


app.listen(5000, ()=>{
    console.log("Server is running at port 5000")
})
