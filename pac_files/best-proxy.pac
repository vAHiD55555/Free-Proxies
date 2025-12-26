function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 112.86.116.24:1080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 202.62.59.216:1080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 190.119.160.28:56160",
        "SOCKS 62.60.131.179:10105",
        "SOCKS 129.213.162.27:17777",
        "SOCKS 116.203.139.209:3128",
        "SOCKS 113.192.12.73:8085",
        "SOCKS 72.10.160.93:21585",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 193.233.254.8:1080",
        "SOCKS 170.81.131.70:3128",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 94.159.106.252:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 121.205.213.141:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}