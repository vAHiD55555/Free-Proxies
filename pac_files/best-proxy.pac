function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.180.49.222:7302",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 202.58.77.77:1111",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 37.59.110.73:80",
        "SOCKS 103.204.211.48:32255",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 47.88.104.126:3344",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}