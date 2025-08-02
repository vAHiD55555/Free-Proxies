function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.78.118.91:8561",
        "SOCKS 103.247.240.34:8080",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 62.210.37.74:8012",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 116.203.139.209:5678",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}