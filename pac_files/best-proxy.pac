function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 154.203.132.81:5080",
        "SOCKS 147.45.39.160:30000",
        "SOCKS 120.133.82.62:44230",
        "SOCKS 144.91.83.56:9050",
        "SOCKS 202.62.47.98:1080",
        "SOCKS 161.97.119.1:8888",
        "SOCKS 120.133.82.62:44014",
        "SOCKS 64.83.12.6:1080",
        "SOCKS 23.27.141.23:3080",
        "SOCKS 76.144.40.133:9050",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 118.145.141.251:44108",
        "SOCKS 185.179.188.54:1080",
        "SOCKS 118.145.141.251:44006",
        "SOCKS 118.145.141.251:44007",
        "SOCKS 154.223.77.54:10002",
        "SOCKS 154.91.176.171:1080",
        "SOCKS 173.249.20.169:9060",
        "SOCKS 38.175.197.50:5555",
        "SOCKS 202.62.42.230:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}