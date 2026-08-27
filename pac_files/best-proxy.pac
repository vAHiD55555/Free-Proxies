function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 161.35.90.93:1082",
        "SOCKS 185.171.83.65:49153",
        "SOCKS 91.210.171.169:9050",
        "SOCKS 47.76.144.139:8443",
        "SOCKS 31.76.31.221:1080",
        "SOCKS 118.145.141.251:44140",
        "SOCKS 45.74.31.42:16982",
        "SOCKS 45.65.138.48:999",
        "SOCKS 103.3.59.251:8080",
        "SOCKS 118.145.141.251:44173",
        "SOCKS 193.232.178.220:1080",
        "SOCKS 118.145.141.251:44019",
        "SOCKS 5.200.72.61:3128",
        "SOCKS 152.233.22.66:36878",
        "SOCKS 151.145.63.243:1080",
        "SOCKS 118.145.141.251:44077",
        "SOCKS 147.45.221.115:1082",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 47.243.59.250:1011",
        "SOCKS 89.208.232.117:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}