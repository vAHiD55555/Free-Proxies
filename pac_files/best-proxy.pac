function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.200.66.166:9051",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 62.60.131.189:4295",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 203.74.125.18:8888",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 221.219.102.218:8118",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 8.210.31.241:1100",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 62.60.131.188:9178",
        "SOCKS 221.202.27.194:10811",
        "SOCKS 62.60.131.189:14786",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}