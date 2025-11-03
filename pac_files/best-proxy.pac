function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.42.9.57:7201",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 195.86.215.2:3128",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 152.53.36.101:29399",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 103.202.223.2:8070",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 116.97.164.107:1003",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 103.242.175.241:8899",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}