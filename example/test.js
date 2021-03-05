let { SmartAPI, WebSocket } = require("smartapi-javascript");

let smart_api = new SmartAPI({
    api_key: "smartapi_key",    // PROVIDE YOUR API KEY HERE
    // OPTIONAL
    // access_token: "YOUR_ACCESS_TOKEN",
    // refresh_token: "YOUR_REFRESH_TOKEN"
});


smart_api.generateSession("CLIENT_CODE", "PASSWORD")
    .then((data) => {
        console.log("SESSION DATA::", data)
        return smart_api.getProfile()

        // return smart_api.logout("CLIENT_CODE")


        // return smart_api.placeOrder
        //           ({
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
        //     "orderid": "210304001809139",
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

        // return smart_api.cancelOrder({
        //     "variety": "NORMAL",
        //     "orderid": "210304001809139"
        // })

        //         //         //         // V2 API'S
        // return smart_api.getOrderBook()

        // return smart_api.getTradeBook()

        // return smart_api.getRMS()

        // return smart_api.getHolding()

        // return smart_api.getPosition()

        // return smart_api.convertPosition({
        // "exchange": "NSE",
        // "oldproducttype": "DELIVERY",
        // "newproducttype": "MARGIN",
        // "tradingsymbol": "SBIN-EQ",
        // "transactiontype": "BUY",
        // "quantity": 1,
        // "type": "DAY"


        // })
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
    })
    .then((data) => {
        console.log("PROFILE::", data)
    })


    .catch(ex => {
        console.log("EX::", ex)
    })

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

// let web_socket = new WebSocket({
//     client_code: "CLIENT_CODE",
//     feed_token: "091108531",
//     script:"mcx_fo|227125" ,        // " "nse_cm|2885&nse_cm|1594" ,         //  //exchange|token for multi stocks use & seperator
//     task: 'sfi'      // mw|sfi|dp
// });

// web_socket.connect();
// web_socket.on('tick', receiveTick)

// setTimeout(function () {
//     web_socket.close()
// }, 3000)

// function receiveTick(data) {
//     console.log("receiveTick:::::", data)
// }

// ########################### Socket Sample Code Ends Here ###########################