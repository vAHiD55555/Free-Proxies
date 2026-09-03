function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 213.199.47.140:1080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 185.248.179.99:8080",
        "SOCKS 103.75.118.84:1080",
        "SOCKS 194.163.174.78:1085",
        "SOCKS 143.198.93.65:1080",
        "SOCKS 113.249.111.67:1080",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 103.134.220.143:1080",
        "SOCKS 193.233.218.121:1080",
        "SOCKS 111.119.162.248:10909",
        "SOCKS 174.138.162.37:34920",
        "SOCKS 49.13.22.249:10808",
        "SOCKS 5.75.133.113:10811",
        "SOCKS 51.15.253.45:8080",
        "SOCKS 45.74.31.30:4006",
        "SOCKS 138.199.25.13:3909",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 47.237.107.41:20000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}