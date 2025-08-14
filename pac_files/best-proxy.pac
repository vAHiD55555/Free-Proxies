function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 60.13.42.157:1080",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 8.217.34.2:1111",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 203.175.102.162:1111",
        "SOCKS 103.165.128.171:8080",
        "SOCKS 5.190.36.2:3128",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 222.59.173.105:44144",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 20.210.76.175:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}