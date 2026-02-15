function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.5.21:60349",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 72.10.160.93:30963",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 35.180.188.216:80",
        "SOCKS 194.135.17.31:1080",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 123.54.197.21:20464",
        "SOCKS 185.189.51.72:12345",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 211.171.114.154:3128",
        "SOCKS 151.252.80.124:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}