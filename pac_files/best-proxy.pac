function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.10.41.194:1080",
        "SOCKS 208.87.128.239:9150",
        "SOCKS 151.145.63.243:1080",
        "SOCKS 66.42.59.208:10808",
        "SOCKS 118.145.141.251:44093",
        "SOCKS 69.55.49.177:38182",
        "SOCKS 195.245.238.86:1080",
        "SOCKS 43.134.7.146:4000",
        "SOCKS 195.133.53.59:10808",
        "SOCKS 45.150.33.211:1081",
        "SOCKS 38.7.195.50:999",
        "SOCKS 118.145.141.251:44145",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 118.145.141.251:44120",
        "SOCKS 118.145.141.251:44116",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 66.59.197.61:3128",
        "SOCKS 118.145.141.251:44011",
        "SOCKS 185.185.80.58:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}