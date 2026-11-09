function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.83.5.83:1080",
        "SOCKS 116.104.251.199:1070",
        "SOCKS 45.74.31.41:4635",
        "SOCKS 43.161.241.50:10808",
        "SOCKS 212.48.150.38:1080",
        "SOCKS 172.86.116.240:1080",
        "SOCKS 186.219.210.255:7080",
        "SOCKS 104.245.245.218:1080",
        "SOCKS 45.74.31.40:5149",
        "SOCKS 83.147.19.226:1080",
        "SOCKS 172.86.90.249:1080",
        "SOCKS 45.74.31.40:9837",
        "SOCKS 45.74.31.41:5699",
        "SOCKS 45.74.31.47:7060",
        "SOCKS 77.83.37.241:1080",
        "SOCKS 45.74.31.41:5405",
        "SOCKS 104.238.220.231:1080",
        "SOCKS 95.163.152.219:1080",
        "SOCKS 8.209.96.245:4002",
        "SOCKS 45.74.31.47:5135",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}