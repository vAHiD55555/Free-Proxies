function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 52.191.222.212:8080",
        "SOCKS 51.79.99.237:4502",
        "SOCKS 45.136.198.40:3128",
        "SOCKS 198.23.236.47:1111",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 37.32.40.253:8080",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 140.82.22.235:34587",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 27.71.228.47:3128",
        "SOCKS 91.238.105.64:2024",
        "SOCKS 116.103.133.168:1009",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 40.172.232.213:29214",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 116.107.169.233:10001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}