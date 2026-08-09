function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.123.251.109:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 46.224.153.114:9050",
        "SOCKS 109.238.95.167:31075",
        "SOCKS 178.156.206.253:8118",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 199.168.131.234:1080",
        "SOCKS 47.238.60.156:4002",
        "SOCKS 103.153.159.217:80",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 8.211.42.167:3129",
        "SOCKS 43.203.195.46:80",
        "SOCKS 85.113.43.181:1080",
        "SOCKS 216.106.179.216:49291",
        "SOCKS 47.250.51.110:8888",
        "SOCKS 154.201.75.64:1100",
        "SOCKS 196.204.83.229:1976",
        "SOCKS 80.90.188.187:24530",
        "SOCKS 5.35.85.97:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}