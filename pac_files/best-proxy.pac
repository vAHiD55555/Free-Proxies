function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.233.78.142:42495",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 103.174.178.140:2021",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 67.43.228.254:11567",
        "SOCKS 42.96.5.254:22883",
        "SOCKS 164.92.222.241:8888",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 89.58.45.94:12345",
        "SOCKS 172.104.4.144:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}