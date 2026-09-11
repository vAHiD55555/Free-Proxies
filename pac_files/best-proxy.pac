function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.255.252:1080",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 45.74.31.42:4005",
        "SOCKS 45.74.31.30:4215",
        "SOCKS 199.66.182.243:4145",
        "SOCKS 104.218.199.86:16062",
        "SOCKS 45.74.31.42:4204",
        "SOCKS 45.74.31.42:4302",
        "SOCKS 130.17.13.182:8080",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 69.87.216.54:7989",
        "SOCKS 45.74.31.30:32972",
        "SOCKS 45.194.41.16:8080",
        "SOCKS 147.45.60.139:1082",
        "SOCKS 45.151.102.251:1084",
        "SOCKS 45.74.31.42:5319",
        "SOCKS 103.151.75.21:2025",
        "SOCKS 140.238.28.230:10808",
        "SOCKS 45.74.31.42:4306",
        "SOCKS 181.209.105.202:1085",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}