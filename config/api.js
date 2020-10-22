module.exports.API = {
    "root": "https://openapisuat.angelbroking.com",
    "login": "https://kite.trade/connect/login",
    "debug": false,
    "timeout": 7000,

    "user_login": "/login-service/rest/auth/angelbroking/user/v1/loginByPassword",
    "generate_token": "/login-service/rest/auth/angelbroking/jwt/v1/generateTokens",
    "get_profile": "/login-service/rest/secure/angelbroking/user/v1/getProfile",

    "order_place": "/order-service/rest/secure/angelbroking/order/v1/placeOrder",
    // "order_status": "/order-service/rest/secure/angelbroking/order/v1/orderStatus",
    "order_get_book": "/order-service/rest/secure/angelbroking/order/v1/getOrderBook",
    "order_modify": "/order-service/rest/secure/angelbroking/order/v1/modifyOrder",
    "order_cancel": "/order-service/rest/secure/angelbroking/order/v1/cancelOrder",

    "get_tradebook": "/order-service/rest/secure/angelbroking/order/v1/getTradeBook",
    "get_rms": "/order-service/rest/secure/angelbroking/rms/v1/getRMS",
    "get_holding": "/order-service/rest/secure/angelbroking/rms/v1/getHolding",
    "get_position": "/order-service/rest/secure/angelbroking/rms/v1/getPosition",
    "covert_position": "/order-service/rest/secure/angelbroking/rms/v1/convertPosition",
    // "api.token": "/session/token",
    // "api.token.invalidate": "/session/token",
    // "api.token.renew": "/session/refresh_token",

    // "user.margins": "/user/margins",
    // "user.margins.segment": "/user/margins/{segment}",

    // "orders": "/orders",
    // "trades": "/trades",
    // "order.info": "/orders/{order_id}",
    // "order.place": "/orders/{variety}",
    // "order.modify": "/orders/{variety}/{order_id}",
    // "order.cancel": "/orders/{variety}/{order_id}",
    // "order.trades": "/orders/{order_id}/trades",
}