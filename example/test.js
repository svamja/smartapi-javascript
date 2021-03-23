let { SmartAPI, WebSocket } = require("smartapi-javascript");

let smart_api = new SmartAPI({
    api_key: "smartapi_key",    // PROVIDE YOUR API KEY HERE
    // OPTIONAL
    // access_token: "YOUR_ACCESS_TOKEN",
    // refresh_token: "YOUR_REFRESH_TOKEN"
});


// smart_api.generateSession("S212741", "pass@456")
//     .then((data) => {
//         console.log(data)
//  return smart_api.getProfile()

// User Methods
// return smart_api.logout()

// return smart_api.getRMS();

// Order Methods
// return smart_api.placeOrder({
//     "variety": "NORMAL",
//     "tradingsymbol": "SBIN-EQ",
//     "symboltoken": "3045",
//     "transactiontype": "BUY",
//     "exchange": "NSE",
//     "ordertype": "LIMIT",
//     "producttype": "INTRADAY",
//     "duration": "DAY",
//     "price": "19500",
//     "squareoff": "0",
//     "stoploss": "0",
//     "quantity": "1"
// })

// return smart_api.modifyOrder({
//     "orderid": "201130000006424",
//     "variety": "NORMAL",
//     "tradingsymbol": "SBIN-EQ",
//     "symboltoken": "3045",
//     "transactiontype": "BUY",
//     "exchange": "NSE",
//     "ordertype": "LIMIT",
//     "producttype": "INTRADAY",
//     "duration": "DAY",
//     "price": "19500",
//     "squareoff": "0",
//     "stoploss": "0",
//     "quantity": "1"
// });

// return smart_api.cancelOrder({
//     "variety": "NORMAL",
//     "orderid": "201130000006424"
// });

// return smart_api.getOrderBook();

// return smart_api.getTradeBook();


// Portfolio Methods
// return smart_api.getHolding();

// return smart_api.getPosition();

// return smart_api.convertPosition({
//     "exchange": "NSE",
//     "oldproducttype": "DELIVERY",
//     "newproducttype": "MARGIN",
//     "tradingsymbol": "SBIN-EQ",
//     "transactiontype": "BUY",
//     "quantity": 1,
//     "type": "DAY"
// });


// GTT Methods
// return smart_api.createRule({
//    "tradingsymbol" : "SBIN-EQ",
//    "symboltoken" : "3045",
//    "exchange" : "NSE", 
//    "producttype" : "MARGIN",
//    "transactiontype" : "BUY",
//    "price" : 100000,
//    "qty" : 10,
//    "disclosedqty": 10,
//    "triggerprice" : 200000,
//    "timeperiod" : 365
// })
// return smart_api.modifyRule({
//             "id" : 1000014,
//             "symboltoken" : "3045",
//             "exchange" : "NSE", 
//             "qty" : 10

// })
// return smart_api.cancelRule({
//      "id" : 1000014,
//      "symboltoken" : "3045",
//      "exchange" : "NSE"
// })
// return smart_api.ruleDetails({
//     "id" : 25
// })
// return smart_api.ruleList({
//      "status" : ["NEW","CANCELLED"],
//      "page" : 1,
//      "count" : 10 
// })

// Historical Methods
// return smart_api.getCandleData({
//     "exchange": "NSE",
//     "symboltoken": "3045",
//     "interval": "MINUTE",
//     "fromdate": "2021-02-08 09:00",
//     "todate": "2021-02-08 09:16"
// })
// })
// .then((data) => {
//     console.log("PROFILE::", data)
// })


// .catch(ex => {
//     console.log("EX::", ex)
// })

// // // smart_api.generateToken("YOUR_REFRESH_TOKEN")
// // //     .then((data) => {
// // //         console.log(data)
// // //     });

// smart_api.setSessionExpiryHook(customSessionHook);


// function customSessionHook() {
//     // USER CAN GENERATE NEW JWT HERE
//     console.log("User loggedout");
// }


// ########################### Socket Sample Code Starts Here ###########################

let web_socket = new WebSocket({
    client_code: "S212741",
    feed_token: "093363928",
    // script: "mcx_fo|226196",       //  "mcx_fo|227125" ,        // " "nse_cm|2885&nse_cm|1594" ,         //  //exchange|token for multi stocks use & seperator
    // task: "mw"     // mw|sfi|dp
});

let currentStatus = web_socket.connect();
console.log("=======Current status===========",currentStatus);

if (currentStatus === false) {
    web_socket.taskCall("mcx_fo|226196", "mw");
}

// function callBack() {
//     console.log("===========CallBack function======");
//     web_socket.taskCall("mcx_fo|226196", "mw");
// }
web_socket.on('tick', receiveTick)



// setTimeout(function () {
//     web_socket.close()
// }, 3000)

function receiveTick(data) {
    console.log("receiveTick:::::", data)
}

// ########################### Socket Sample Code Ends Here ###########################