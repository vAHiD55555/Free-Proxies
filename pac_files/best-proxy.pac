function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.35.9:57114",
        "SOCKS 51.79.99.237:4502",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 66.175.219.50:3228",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 179.96.28.58:80",
        "SOCKS 176.9.238.155:16379",
        "SOCKS 107.152.45.72:8888",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 27.79.178.166:16000",
        "SOCKS 171.228.132.84:10089",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 27.79.139.183:16000",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 116.107.173.169:10001",
        "SOCKS 72.195.34.42:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}