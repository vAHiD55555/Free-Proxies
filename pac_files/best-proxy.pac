function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.68.147.8:3000",
        "SOCKS 43.208.240.77:12587",
        "SOCKS 72.205.0.93:4145",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 115.127.178.42:2026",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 15.168.235.57:391",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 185.222.162.11:8080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 67.43.228.251:3241",
        "SOCKS 128.140.76.145:18080",
        "SOCKS 188.132.222.11:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}