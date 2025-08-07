function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.6.105.152:4216",
        "SOCKS 103.14.251.20:38080",
        "SOCKS 209.97.149.157:80",
        "SOCKS 5.61.62.24:8118",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 116.98.183.148:1010",
        "SOCKS 42.117.243.39:16000",
        "SOCKS 123.21.22.111:1010",
        "SOCKS 160.119.58.220:8088",
        "SOCKS 209.121.164.51:31147",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 115.221.245.167:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}