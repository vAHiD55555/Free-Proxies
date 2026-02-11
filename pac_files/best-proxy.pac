function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.91.95.238:58237",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 195.98.82.62:1080",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 123.54.197.51:20060",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 72.10.160.171:16055",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 123.54.197.24:23186",
        "SOCKS 123.54.197.19:23039",
        "SOCKS 38.7.195.51:999",
        "SOCKS 46.146.216.44:1080",
        "SOCKS 123.54.197.51:22830",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 116.105.29.252:1080",
        "SOCKS 123.54.197.53:21675",
        "SOCKS 123.54.197.51:22994",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}