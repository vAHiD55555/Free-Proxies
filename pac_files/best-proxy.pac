function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.79.238.242:16000",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 89.117.145.245:3128",
        "SOCKS 117.74.65.207:443",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 47.82.97.76:1111",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 42.193.101.38:1080",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 49.254.107.191:22685",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 165.227.174.249:33080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}