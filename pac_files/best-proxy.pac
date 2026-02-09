function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.242.175.241:8899",
        "SOCKS 152.53.171.242:11716",
        "SOCKS 190.6.54.12:6969",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 124.248.177.91:1080",
        "SOCKS 123.54.197.19:20000",
        "SOCKS 152.53.171.242:19778",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 67.43.236.20:14021",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 193.47.60.119:52681",
        "SOCKS 67.43.228.250:24709",
        "SOCKS 62.60.131.232:5681",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 40.192.14.136:9292",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}