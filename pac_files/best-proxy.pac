function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.20:3209",
        "SOCKS 157.66.16.36:5568",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 45.124.15.90:8080",
        "SOCKS 185.105.230.45:3128",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 47.243.92.199:3128",
        "SOCKS 185.203.238.120:3128",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 4.206.212.39:3128",
        "SOCKS 200.35.50.89:3028",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 62.213.13.54:3128",
        "SOCKS 67.43.236.21:32215",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 43.248.128.209:7890",
        "SOCKS 67.43.228.252:1173",
        "SOCKS 178.17.62.152:8881",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}