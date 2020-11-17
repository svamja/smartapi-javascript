let { SmartAPI, WebSocket } = require("smartapi-javascript");

// let smart_api = new SmartAPI({
//     api_key: "YOUR_API_KEY",
//     // OPTIONAL
//     // access_token: "YOUR_ACCESS_TOKEN",
//     // refresh_token: "YOUR_REFRESH_TOKEN"
// });


// smart_api.generateSession("CLIENT_CODE", "PASSWORD")
//     .then((data) => {
//         // return web_socket.connect();

//         // V1 API'S
//         return smart_api.getProfile()

//         // return smart_api.logout()

//         // return smart_api.placeOrder({
//         //     "tradingsymbol": "RELIANCE-EQ",
//         //     "exchange": "NSE",
//         //     "transactiontype": "BUY",
//         //     "ordertype": "MARKET",
//         //     "producttype": "DELIVERY",
//         //     "price": 0,
//         //     "quantity": 1,
//         //     "variety": "NORMAL",
//         //     "duration": "DAY"
//         // })

//         // return smart_api.modifyOrder({
//         //     "orderid": "201015000000284",
//         //     "tradingsymbol": "INFY-EQ",
//         //     "exchange": "NSE",
//         //     "transactiontype": "BUY",
//         //     "ordertype": "MARKET",
//         //     "producttype": "INTRADAY",
//         //     "price": 0,
//         //     "quantity": 1,
//         //     "variety": "NORMAL",
//         //     "duration": "DAY"
//         // });

//         // return smart_api.cancelOrder("201015000000281");

//         // V2 API'S
//         // return smart_api.getOrderBook(); // WORKING

//         // return smart_api.getTradeBook();    //{ status: false,
//         //   message: 'No Trade Found',
//         //   errorcode: 'AB1008',
//         //   data: null }

//         // return smart_api.getRMS(); // WORKING

//         // return smart_api.getHolding(); //{ status: false,
//         // message: 'Holding Not Found',
//         // errorcode: 'AB1015',
//         // data: null }

//         // return smart_api.getPosition();    //{ status: false,
//         // message: 'No Position Found',
//         // errorcode: 'AB1016',
//         // data: null }


//         // return smart_api.covertPosition({
//         //     "exchange": "NSE",
//         //     "symboltoken": "2885",
//         //     "producttype": "DELIVERY",
//         //     "newproducttype": "INTRADAY",
//         //     "tradingsymbol": "RELIANCE-EQ",
//         //     "symbolname": "RELIANCE",
//         //     "instrumenttype": "",
//         //     "priceden": "1",
//         //     "pricenum": "1",
//         //     "genden": "1",
//         //     "gennum": "1",
//         //     "precision": "2",
//         //     "multiplier": "-1",
//         //     "boardlotsize": "1",
//         //     "buyqty": "1",
//         //     "sellqty": "0",
//         //     "buyamount": "223580",
//         //     "sellamount": "0",
//         //     "transactiontype": "BUY",
//         //     "quantity": 1,
//         //     "type": "DAY"
//         // });
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(ex => {
//         console.log("EX::", ex)
//     })

// // smart_api.generateToken("YOUR_REFRESH_TOKEN")
// //     .then((data) => {
// //         console.log(data)
// //     });

// smart_api.setSessionExpiryHook(customSessionHook);


// function customSessionHook() {
//     // USER CAN GENERATE NEW JWT HERE
//     console.log("User loggedout");
// }


// ########################### Socket Sample Code Starts Here ###########################

let web_socket = new WebSocket({
    client_code: "CLIENT_CODE",
    feed_token: "FEED_TOKEN"
});

web_socket.connect();
web_socket.on('tick', receiveTick)

function receiveTick(data) {
    console.log("receiveTick:::::", data)
}
// ########################### Socket Sample Code Ends Here ###########################