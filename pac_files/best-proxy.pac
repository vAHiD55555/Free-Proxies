function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.253:3881",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 157.100.52.170:999",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 152.53.36.101:36313",
        "SOCKS 8.220.205.172:80",
        "SOCKS 72.10.160.93:26517",
        "SOCKS 207.254.28.68:2025",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 72.10.160.173:1157",
        "SOCKS 72.10.160.90:1237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}