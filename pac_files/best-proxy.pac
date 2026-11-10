function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 59.66.128.29:10808",
        "SOCKS 173.212.251.39:1081",
        "SOCKS 45.74.31.41:11128",
        "SOCKS 45.74.31.40:7648",
        "SOCKS 45.74.31.40:4219",
        "SOCKS 47.238.134.126:8000",
        "SOCKS 176.65.151.240:1080",
        "SOCKS 45.74.31.41:10055",
        "SOCKS 45.74.31.46:8802",
        "SOCKS 91.214.141.224:10808",
        "SOCKS 138.16.231.7:10808",
        "SOCKS 103.191.218.162:69",
        "SOCKS 84.241.25.131:10808",
        "SOCKS 213.176.115.104:1080",
        "SOCKS 64.83.14.6:555",
        "SOCKS 45.74.31.41:11966",
        "SOCKS 45.74.31.40:4951",
        "SOCKS 45.74.31.46:6806",
        "SOCKS 45.74.31.47:5426",
        "SOCKS 45.74.31.46:7745",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}