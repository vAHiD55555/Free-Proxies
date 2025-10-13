function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 177.234.194.30:999",
        "SOCKS 117.0.221.42:1006",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 101.200.241.24:3128",
        "SOCKS 112.198.128.159:8082",
        "SOCKS 72.10.160.173:24063",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 102.209.56.21:80",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 47.79.91.116:1122",
        "SOCKS 207.246.234.115:4669",
        "SOCKS 129.150.39.242:8118",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 135.181.203.208:80",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 221.202.27.194:10807",
        "SOCKS 174.75.211.222:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}