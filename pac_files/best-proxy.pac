function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.49.22.23:1080",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 47.86.36.218:33333",
        "SOCKS 36.255.98.177:7087",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 36.255.98.163:43361",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 62.60.131.191:4002",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 197.164.101.11:1981",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 65.108.203.37:18080",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 190.242.157.215:8080",
        "SOCKS 202.62.52.35:1080",
        "SOCKS 104.248.158.27:25100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}