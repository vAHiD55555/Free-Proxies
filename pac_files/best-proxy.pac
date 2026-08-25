function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.81.56.193:8888",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 171.247.165.177:8080",
        "SOCKS 45.74.31.30:13295",
        "SOCKS 14.225.204.32:10800",
        "SOCKS 163.223.231.121:59118",
        "SOCKS 193.24.222.150:33500",
        "SOCKS 103.9.185.33:1080",
        "SOCKS 88.218.206.170:22",
        "SOCKS 103.73.67.219:10800",
        "SOCKS 45.74.31.42:4187",
        "SOCKS 178.62.75.115:1080",
        "SOCKS 95.84.160.232:8443",
        "SOCKS 5.75.133.113:10811",
        "SOCKS 84.201.144.65:10003",
        "SOCKS 118.145.141.251:44147",
        "SOCKS 118.145.141.251:44118",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 49.13.22.249:10808",
        "SOCKS 46.62.246.93:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}