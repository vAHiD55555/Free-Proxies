function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.244.208.195:23699",
        "SOCKS 152.53.171.242:12265",
        "SOCKS 152.53.171.242:14304",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 152.53.171.242:13019",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 152.53.171.242:20753",
        "SOCKS 180.103.19.55:1080",
        "SOCKS 3.24.178.81:80",
        "SOCKS 35.180.188.216:80",
        "SOCKS 37.120.162.180:11405",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 18.178.60.212:80",
        "SOCKS 45.123.142.69:8181",
        "SOCKS 152.53.171.242:25257",
        "SOCKS 62.60.131.179:8092",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}