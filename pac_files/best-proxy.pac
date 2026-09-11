function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 3.10.170.234:3128",
        "SOCKS 202.181.24.102:10818",
        "SOCKS 45.74.31.40:4443",
        "SOCKS 112.216.54.226:12121",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 45.74.31.30:40771",
        "SOCKS 174.138.162.34:30946",
        "SOCKS 45.74.31.42:11595",
        "SOCKS 45.74.31.42:5010",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 45.74.31.30:4665",
        "SOCKS 45.74.31.30:6759",
        "SOCKS 69.87.216.54:7989",
        "SOCKS 45.74.31.42:5047",
        "SOCKS 45.74.31.42:11074",
        "SOCKS 45.194.41.231:8080",
        "SOCKS 94.243.32.44:1080",
        "SOCKS 65.109.219.215:9089",
        "SOCKS 45.74.31.47:25802",
        "SOCKS 45.74.31.42:13237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}