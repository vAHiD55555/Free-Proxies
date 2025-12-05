function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.238.88.218:1046",
        "SOCKS 72.10.160.174:10301",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 103.82.23.118:5178",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 171.238.91.139:1069",
        "SOCKS 157.245.63.81:3128",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 101.255.166.185:8080",
        "SOCKS 212.156.17.58:8080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 171.238.103.65:1054",
        "SOCKS 115.127.106.226:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}