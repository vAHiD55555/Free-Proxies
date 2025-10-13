function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.200.66.166:9051",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 179.96.28.58:80",
        "SOCKS 117.161.170.163:9012",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 157.20.253.43:8989",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 78.12.249.123:8026",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 47.79.94.34:1122",
        "SOCKS 67.43.236.19:25371",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 103.148.212.250:1080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 72.10.160.92:12137",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 65.108.159.129:8081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}