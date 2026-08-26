function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.145.141.251:44122",
        "SOCKS 65.21.252.66:10811",
        "SOCKS 8.213.128.6:90",
        "SOCKS 194.58.97.165:9050",
        "SOCKS 151.185.59.20:8080",
        "SOCKS 195.46.183.181:1080",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 105.154.11.1:4080",
        "SOCKS 112.216.54.226:12121",
        "SOCKS 103.106.190.58:1080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 176.126.70.111:16379",
        "SOCKS 164.52.211.20:8080",
        "SOCKS 45.159.189.203:1080",
        "SOCKS 195.19.52.187:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 101.2.166.73:1080",
        "SOCKS 118.145.141.251:44234",
        "SOCKS 45.118.146.219:1080",
        "SOCKS 118.145.141.251:44179",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}