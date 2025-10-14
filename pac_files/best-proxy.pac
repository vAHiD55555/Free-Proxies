function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 207.246.234.115:4669",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 41.155.4.130:8082",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 86.107.101.55:60910",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 41.173.7.82:8080",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 181.78.202.29:8080",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 94.131.82.71:3128",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 144.91.78.34:20269",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}