function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 95.47.239.65:3128",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 91.149.219.147:3128",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 58.186.92.242:16000",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 212.175.61.31:8080",
        "SOCKS 202.137.14.57:8085",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 106.52.187.222:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}