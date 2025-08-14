function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.172:28327",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 115.77.170.97:10001",
        "SOCKS 51.15.236.150:16379",
        "SOCKS 222.59.173.105:44238",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 91.84.99.28:80",
        "SOCKS 103.16.62.138:10888",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 42.117.168.250:16000",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 177.200.80.6:11221",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 20.210.39.153:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}