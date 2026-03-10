function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 87.229.205.227:8080",
        "SOCKS 45.81.130.110:8888",
        "SOCKS 176.108.254.49:1080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 94.103.92.224:1080",
        "SOCKS 45.10.69.40:8888",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 123.54.197.51:20778",
        "SOCKS 14.56.107.244:3128",
        "SOCKS 79.52.170.178:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 206.123.156.232:11340",
        "SOCKS 61.72.110.54:3128",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 91.107.148.58:53967",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}