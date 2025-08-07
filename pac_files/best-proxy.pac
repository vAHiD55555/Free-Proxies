function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.19:3527",
        "SOCKS 47.236.37.129:18081",
        "SOCKS 45.166.93.113:999",
        "SOCKS 147.75.34.105:443",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 123.21.22.111:1010",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 160.119.58.220:8088",
        "SOCKS 115.72.170.23:10008",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 64.225.70.191:8888",
        "SOCKS 27.79.215.129:16000",
        "SOCKS 118.34.4.196:80",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 92.58.181.171:7575",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 27.79.171.61:16000",
        "SOCKS 40.71.46.210:8214",
        "SOCKS 103.109.57.42:3629",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}