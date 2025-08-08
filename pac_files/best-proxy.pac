function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.227.224.110:9051",
        "SOCKS 109.120.133.3:1200",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 47.252.18.37:5060",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 173.209.63.70:8192",
        "SOCKS 41.33.252.209:80",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 27.79.140.116:16000",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 171.228.154.82:4001",
        "SOCKS 67.43.236.18:3927",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}