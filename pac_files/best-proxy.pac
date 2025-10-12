function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 172.104.4.144:9050",
        "SOCKS 150.136.153.231:80",
        "SOCKS 47.79.94.78:1122",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 185.93.89.155:4069",
        "SOCKS 195.74.86.205:80",
        "SOCKS 107.152.45.72:8888",
        "SOCKS 182.160.109.166:1080",
        "SOCKS 185.93.89.145:4039",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 78.12.249.123:8026",
        "SOCKS 185.93.89.181:4145",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 103.69.20.115:58989",
        "SOCKS 38.183.144.18:1080",
        "SOCKS 121.132.61.211:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}