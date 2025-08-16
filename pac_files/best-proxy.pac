function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 88.210.38.50:3128",
        "SOCKS 123.128.12.93:9055",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 104.194.90.19:3128",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 27.79.238.173:16000",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 173.209.63.69:8245",
        "SOCKS 140.238.184.182:3128",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 8.218.39.40:10800",
        "SOCKS 27.79.213.13:16000",
        "SOCKS 103.133.26.117:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}