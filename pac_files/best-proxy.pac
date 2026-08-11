function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 138.199.25.13:3901",
        "SOCKS 103.161.104.105:1080",
        "SOCKS 59.152.97.233:1080",
        "SOCKS 103.163.244.106:1080",
        "SOCKS 223.78.91.7:7897",
        "SOCKS 213.165.43.73:46650",
        "SOCKS 95.140.158.177:1084",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 192.252.208.70:14282",
        "SOCKS 202.58.77.239:8080",
        "SOCKS 116.104.53.221:1090",
        "SOCKS 66.59.197.62:3128",
        "SOCKS 47.238.130.212:8443",
        "SOCKS 147.45.60.139:1082",
        "SOCKS 79.137.192.65:30081",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 47.80.27.150:1080",
        "SOCKS 176.120.84.29:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}