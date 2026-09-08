function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:4425",
        "SOCKS 45.74.31.42:4445",
        "SOCKS 217.64.30.216:3128",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 45.74.31.42:4124",
        "SOCKS 40.160.136.215:1080",
        "SOCKS 3.10.170.234:3128",
        "SOCKS 193.43.104.110:1080",
        "SOCKS 213.165.38.49:1080",
        "SOCKS 49.13.22.249:10811",
        "SOCKS 45.74.31.42:4080",
        "SOCKS 45.74.31.30:20030",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 45.74.31.42:4209",
        "SOCKS 66.33.22.225:32747",
        "SOCKS 103.175.242.124:1088",
        "SOCKS 186.246.14.205:9050",
        "SOCKS 45.74.31.42:4697",
        "SOCKS 103.55.63.14:1080",
        "SOCKS 45.74.31.30:39768",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}