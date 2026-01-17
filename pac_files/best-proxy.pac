function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.100.209.184:3128",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 47.98.190.236:8002",
        "SOCKS 185.118.51.133:3128",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 67.43.236.20:6695",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 13.229.47.109:80",
        "SOCKS 160.19.16.86:1080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 178.33.162.89:58574",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}