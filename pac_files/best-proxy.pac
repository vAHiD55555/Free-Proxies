function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 49.13.22.249:10801",
        "SOCKS 66.151.32.105:1080",
        "SOCKS 111.119.162.248:10901",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 118.145.141.251:44218",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 5.130.50.118:1080",
        "SOCKS 72.56.27.122:1081",
        "SOCKS 161.97.106.223:9050",
        "SOCKS 80.72.180.122:1080",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 14.224.194.181:2080",
        "SOCKS 103.55.63.14:1080",
        "SOCKS 103.239.201.50:58765",
        "SOCKS 118.145.141.251:44050",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 151.185.59.40:8080",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 118.145.141.251:44172",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}