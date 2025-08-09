function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 184.185.2.45:4145",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 50.112.100.138:80",
        "SOCKS 173.209.63.67:8173",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 103.82.20.89:8888",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 202.5.37.104:17382",
        "SOCKS 45.166.93.113:999",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 172.104.240.74:9053",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}