function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.104.152:49981",
        "SOCKS 160.19.16.86:1080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 185.93.89.183:30004",
        "SOCKS 152.53.36.101:27391",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 186.97.200.214:999",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 67.210.146.50:11080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 15.160.186.74:521",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 185.93.89.182:6071",
        "SOCKS 185.93.89.179:9797",
        "SOCKS 47.245.83.61:1011",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 188.165.233.121:9151",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}