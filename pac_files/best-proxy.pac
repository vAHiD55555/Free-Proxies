function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.65.90.3:4145",
        "SOCKS 190.153.237.6:37453",
        "SOCKS 202.79.26.242:1080",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 62.60.131.188:36304",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 36.255.98.175:4304",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 114.67.227.38:1080",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 185.118.51.133:3128",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 169.57.157.148:80",
        "SOCKS 36.255.98.180:10088",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 8.222.151.218:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}