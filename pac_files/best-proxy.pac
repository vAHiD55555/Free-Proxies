function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 180.158.222.93:1080",
        "SOCKS 130.255.94.39:5080",
        "SOCKS 45.74.31.42:12442",
        "SOCKS 45.74.31.30:4193",
        "SOCKS 45.74.31.42:13027",
        "SOCKS 45.74.31.42:15015",
        "SOCKS 202.70.156.235:3000",
        "SOCKS 109.191.10.98:1080",
        "SOCKS 47.237.138.184:3128",
        "SOCKS 45.74.31.30:9964",
        "SOCKS 185.204.170.179:1123",
        "SOCKS 185.204.170.179:1143",
        "SOCKS 45.74.31.30:32816",
        "SOCKS 45.74.31.42:11457",
        "SOCKS 45.74.31.30:4866",
        "SOCKS 45.74.31.25:10685",
        "SOCKS 103.206.68.241:1080",
        "SOCKS 38.58.182.147:1080",
        "SOCKS 45.74.31.42:5487",
        "SOCKS 45.74.31.42:4497",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}