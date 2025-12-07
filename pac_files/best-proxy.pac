function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.210.76.175:8561",
        "SOCKS 150.227.4.147:1080",
        "SOCKS 144.125.164.158:8080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 72.10.160.93:17453",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 134.228.79.236:8080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 65.108.203.36:28080",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 82.115.24.134:9090",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 37.157.217.144:10810",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 44.239.103.14:80",
        "SOCKS 72.223.188.67:4145",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 144.48.163.114:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}