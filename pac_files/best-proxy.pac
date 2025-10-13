function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.32.188:57114",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 93.177.66.204:19000",
        "SOCKS 45.4.202.170:999",
        "SOCKS 45.115.112.142:11011",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 199.188.207.30:8080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 123.128.12.93:9050",
        "SOCKS 45.144.234.129:53681",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 135.181.203.208:80",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 185.130.226.55:1080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 47.76.184.130:1011",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 72.10.160.173:24063",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}