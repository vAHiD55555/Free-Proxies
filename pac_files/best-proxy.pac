function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 34.229.113.62:1080",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 34.69.61.247:80",
        "SOCKS 195.19.52.187:1080",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 37.187.92.9:1029",
        "SOCKS 188.127.224.164:2080",
        "SOCKS 103.88.234.239:40001",
        "SOCKS 118.145.141.251:44073",
        "SOCKS 178.156.206.253:8118",
        "SOCKS 95.163.220.107:10808",
        "SOCKS 120.133.82.62:44108",
        "SOCKS 85.174.84.22:1080",
        "SOCKS 65.21.252.66:10808",
        "SOCKS 82.193.116.160:21003",
        "SOCKS 172.81.111.156:10001",
        "SOCKS 110.235.240.135:1080",
        "SOCKS 103.239.52.100:1080",
        "SOCKS 79.134.4.192:1080",
        "SOCKS 20.18.193.135:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}