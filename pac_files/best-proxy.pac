function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 151.243.153.157:8118",
        "SOCKS 8.215.112.240:7777",
        "SOCKS 165.140.167.167:9050",
        "SOCKS 178.215.236.16:1080",
        "SOCKS 47.82.108.195:1011",
        "SOCKS 147.15.122.136:1083",
        "SOCKS 36.138.206.172:1080",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 23.27.141.243:3080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 124.41.225.101:1080",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 45.114.60.142:1080",
        "SOCKS 91.219.63.53:1080",
        "SOCKS 78.24.180.210:8080",
        "SOCKS 177.10.66.14:1080",
        "SOCKS 88.218.206.170:22",
        "SOCKS 144.31.189.114:1080",
        "SOCKS 72.56.106.48:1080",
        "SOCKS 185.236.22.192:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}