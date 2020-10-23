# SmartAPI Javascript Client SDK

## Installation
```bash
npm i smartapi-javascript
```

## Getting started with API
```javascript
let { SmartAPI } = require("smartapi-javascript");

let smart_api = new SmartAPI({
    api_key: "YOUR_API_KEY",
    // OPTIONAL
    // access_token: "YOUR_ACCESS_TOKEN",
    // refresh_token: "YOUR_REFRESH_TOKEN"
});

smart_api.generateSession("CLIENT_CODE", "PASSWORD")
    .then((data) => {
        return smart_api.getProfile()
    })
    .then((data) => {
        // Profile details
    })
    .catch(ex => {
        //Log error
    })
```

