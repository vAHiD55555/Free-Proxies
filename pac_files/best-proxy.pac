function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 165.245.187.193:3128",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 150.129.115.253:6667",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 116.96.32.160:2080",
        "SOCKS 13.215.27.14:1080",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 147.45.221.111:1082",
        "SOCKS 5.35.85.97:1080",
        "SOCKS 119.28.64.217:50161",
        "SOCKS 116.96.32.160:1045",
        "SOCKS 185.196.61.251:1080",
        "SOCKS 58.19.233.37:1080",
        "SOCKS 115.79.70.69:8470",
        "SOCKS 45.77.37.39:2022",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 31.76.102.15:8080",
        "SOCKS 198.204.244.178:3128",
        "SOCKS 147.45.66.117:1082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}