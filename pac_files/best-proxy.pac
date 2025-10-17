function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.88.104.126:3344",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 185.93.89.183:15918",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 185.93.89.181:12000",
        "SOCKS 185.93.89.188:4319",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 103.17.246.60:1080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 185.93.89.145:9315",
        "SOCKS 185.93.89.158:12000",
        "SOCKS 171.241.224.165:1005",
        "SOCKS 135.181.203.208:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}