function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 175.24.2.65:1080",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 198.23.236.47:1111",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 51.15.205.29:16379",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 85.133.240.75:8080",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 46.101.104.251:46009",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 147.75.34.74:10019",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}