function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.215.46.91:20087",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 194.5.212.45:8443",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 173.209.63.70:8040",
        "SOCKS 186.116.148.52:8080",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 103.56.206.77:8099",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 103.131.19.44:8080",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 47.88.18.204:8023",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 37.200.66.166:9051",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}