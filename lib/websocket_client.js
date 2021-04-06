let web_socket = require("ws");
let atob = require('atob');
let pako = require('pako');

let triggers = {
     "connect": [],
     "tick": []
};

let WebSocketClient = function (params) {
     let self = this;

     let ws = null,
          clientcode = params.clientcode || null,
          //feed_token = params.feed_token || null,
          //script = params.script || null;
          //task = params.task || null;
          jwttoken = params.jwttoken || null,
          apikey = params.apikey || null;
          feedtype = params.feedtype || null;
         // action_type = params.action_type || null;

     let url = params.url || "wss://smartapisocket.angelbroking.com/websocket?jwttoken=" + jwttoken + "&&clientcode=" +clientcode+ "&&apikey=" +apikey;



     this.connect = function () {
          console.log("Connected");
          return new Promise((resolve, reject) => {
               if (clientcode === null || jwttoken === null || apikey === null || feedtype === null ) return "client_code or jwt_token or api_key or feed_type is missing";
               console.log("Before Open");
               ws = new web_socket(url, null, { rejectUnauthorized: false });
               ws.onopen = function onOpen(evt) {
                    // var _req = '{"action_type":"cn","channel":"","token":"' + jwt_token + '","user": "' + client_code + '","acctid":"' + client_code + '", "api_key": "'+ api_key +'"}';
                    // ws.send(_req);
                    console.log("Before Hearbeat");
                    setInterval(function () {
                         console.log("Inside heartbeat function");
                         var _hb_req = '{"actiontype":"heartbeat","feedtype":"' + feedtype + '","jwttoken":"' + jwttoken + '","clientcode": "' + clientcode + '", "apikey": "'+ apikey +'"}';
                         ws.send(_hb_req);
                    }, 60000);
                    resolve()
                    console.log("Opened");
               };
               ws.onmessage = function (evt) {
                 // console.log(evt);
                    var result = evt.data;

                    // // Convert binary string to character-number array
                    // var charData = strData.split('').map(function (x) { return x.charCodeAt(0); });

                    // // Turn number array into byte-array
                    // var binData = new Uint8Array(charData);

                    // // Pako magic
                    // var result = _atos(pako.inflate(binData));

                    // // console.log(result)
                    trigger("tick", [JSON.parse(result)]);
               };
               ws.onerror = function (evt) {
                    console.log("error::", evt)
                    self.connect();
                    reject(evt)
               };
               ws.onclose = function (evt) {
                    console.log("Socket closed")
               };
          })
     }

     this.fetchData = function (actiontype, feedtype) {
          if (actiontype === null) return "task is missing";
          if (actiontype === "subscribe" || actiontype === "unsubscribe") {
              // var feedtype = feed_type;   //"nse_cm|2885&nse_cm|1594&nse_cm|11536"; //order_feed
               var _req = '{"actiontype":"' + actiontype + '","feedtype":"' + feedtype + '","jwttoken":"' + jwttoken + '","clientcode": "' + clientcode + '", "apikey": "'+ apikey +'"}';
               ws.send(_req);
               console.log("Fetch Data");
          } else return "Invalid action_type provided";
     };

     this.on = function (e, callback) {
          if (triggers.hasOwnProperty(e)) {
               triggers[e].push(callback);
          }
     };


     this.close = function () {
          ws.close()
     }
}

function _atos(array) {
     var newarray = [];
     try {
          for (var i = 0; i < array.length; i++) {
               newarray.push(String.fromCharCode(array[i]));
          }
     } catch (e) { }

     return newarray.join('');
}

// trigger event callbacks
function trigger(e, args) {
     if (!triggers[e]) return
     for (var n = 0; n < triggers[e].length; n++) {
          triggers[e][n].apply(triggers[e][n], args ? args : []);
     }
}

module.exports = WebSocketClient;