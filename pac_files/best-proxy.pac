function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.83.234.100:1111",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 178.20.41.152:3128",
        "SOCKS 91.84.99.28:80",
        "SOCKS 42.118.0.67:16000",
        "SOCKS 34.215.51.159:1080",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 1.55.199.150:16000",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 27.79.232.121:16000",
        "SOCKS 58.186.100.200:16000",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 67.43.228.252:21045",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}