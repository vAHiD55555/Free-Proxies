function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.104.152:49981",
        "SOCKS 118.68.172.205:16000",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 27.79.234.240:16000",
        "SOCKS 64.69.43.232:1080",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 156.54.212.29:9090",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 67.43.236.22:29979",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}