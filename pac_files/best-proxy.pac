function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.208.25.125:14",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 43.163.124.13:20000",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 47.237.128.112:1011",
        "SOCKS 47.237.70.144:1011",
        "SOCKS 78.12.220.164:32090",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 163.47.37.190:1080",
        "SOCKS 203.189.156.212:1080",
        "SOCKS 138.199.25.13:3909",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 47.236.164.244:1011",
        "SOCKS 78.29.46.43:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}