function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.7.130.195:8080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 59.29.182.162:8888",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 46.101.104.251:46009",
        "SOCKS 95.47.239.65:3128",
        "SOCKS 116.103.131.240:1023",
        "SOCKS 66.78.40.66:8880",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 8.213.156.191:3541",
        "SOCKS 117.74.65.207:443",
        "SOCKS 52.189.122.251:3128",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 42.118.1.7:16000",
        "SOCKS 188.166.197.129:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}