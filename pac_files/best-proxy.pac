function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.61.38.140:1080",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 179.96.28.58:80",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 135.181.177.112:8888",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 172.111.146.153:443",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 202.5.60.46:1080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 35.183.64.191:29715",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}