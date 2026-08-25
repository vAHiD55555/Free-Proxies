function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.164.136.189:1080",
        "SOCKS 118.145.141.251:44242",
        "SOCKS 5.130.50.118:1080",
        "SOCKS 118.145.141.251:44187",
        "SOCKS 54.37.75.154:9050",
        "SOCKS 172.245.55.199:10809",
        "SOCKS 90.8.144.108:3317",
        "SOCKS 31.76.31.119:1080",
        "SOCKS 41.220.217.51:8080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 172.104.89.128:1080",
        "SOCKS 150.136.58.221:1080",
        "SOCKS 34.69.61.247:80",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 165.99.14.18:1111",
        "SOCKS 134.209.18.113:1088",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 66.42.59.208:10808",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 118.145.141.251:44077",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}