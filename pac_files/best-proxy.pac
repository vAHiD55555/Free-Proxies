function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.133:1020",
        "SOCKS 185.26.181.241:80",
        "SOCKS 47.77.180.205:1080",
        "SOCKS 193.233.254.77:1080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 213.165.58.8:1080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 77.246.111.238:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 190.60.56.226:999",
        "SOCKS 43.160.195.20:20005",
        "SOCKS 58.19.55.17:15127",
        "SOCKS 176.196.157.83:10808",
        "SOCKS 114.231.73.6:1080",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 116.99.49.187:10002",
        "SOCKS 183.80.54.224:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}