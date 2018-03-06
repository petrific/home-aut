var ping = require('ping');
var dash_button = require('node-dash-button');
var dash = dash_button('78:E1:03:29:79:02', null, null, 'arp');

var hosts = ['192.168.1.106'];

var pingDash = function(dash)
{
    ping.promise.probe(dash, {timeout:1}).then(function(pingResponse) {
        var timeout = 1;
        if(pingResponse.alive){
            console.log('Dash is alive!')
            timeout = 500;
        }else{
  //          console.log('Dash not active, re-scanning...')
        }
        setTimeout(function () { pingDash(dash)}, timeout);
    });
}

var main = function() {
    console.log('Beginning monitoring...');

    console.log('Pinging...');
    pingDash(hosts[0]);
    dash.on("detected", function(dash_id) {
        console.log('FOUND DASH VIA ARP');
    });
    
};
    
main();