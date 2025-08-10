function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.205.213.141:4216",
        "SOCKS 42.118.74.104:16000",
        "SOCKS 65.38.213.154:8881",
        "SOCKS 27.147.170.95:8080",
        "SOCKS 203.175.127.240:8080",
        "SOCKS 51.20.192.194:3128",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 38.41.12.88:999",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 34.101.64.157:3128",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 88.1.159.1:3128",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 15.168.12.20:3128",
        "SOCKS 139.59.228.95:8118",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 113.160.132.195:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}