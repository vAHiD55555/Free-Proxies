function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 94.130.16.48:30003",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 206.123.156.188:8410",
        "SOCKS 169.57.157.148:80",
        "SOCKS 206.123.156.187:11611",
        "SOCKS 38.145.203.86:8449",
        "SOCKS 38.145.220.168:8444",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 94.130.16.48:30045",
        "SOCKS 94.130.16.48:30089",
        "SOCKS 38.34.179.60:8450",
        "SOCKS 38.34.179.56:8450",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 206.123.156.227:15672",
        "SOCKS 170.64.170.204:1080",
        "SOCKS 37.49.224.243:1080",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 206.123.156.205:11652",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}