function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.114.78:5556",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 135.181.203.208:80",
        "SOCKS 116.203.139.209:3128",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 62.60.131.179:9093",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 159.65.128.52:8080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 185.202.59.66:3128",
        "SOCKS 67.43.236.18:18447",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}