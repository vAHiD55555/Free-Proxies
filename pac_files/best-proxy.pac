function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.230.220.25:4857",
        "SOCKS 47.236.147.45:1011",
        "SOCKS 157.175.147.228:10011",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 91.236.74.10:8080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 72.10.160.90:32103",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 45.168.244.16:8080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 51.158.105.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}