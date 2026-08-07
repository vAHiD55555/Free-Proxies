function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.164.3.124:1080",
        "SOCKS 212.46.245.189:1080",
        "SOCKS 66.181.39.197:1080",
        "SOCKS 8.213.215.187:143",
        "SOCKS 195.19.55.74:1080",
        "SOCKS 202.79.26.242:1080",
        "SOCKS 2.248.72.25:1080",
        "SOCKS 143.47.59.115:9050",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 77.110.103.146:1080",
        "SOCKS 84.201.144.65:10006",
        "SOCKS 194.163.174.78:1088",
        "SOCKS 176.12.65.24:443",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 78.109.137.53:1080",
        "SOCKS 138.124.125.198:3128",
        "SOCKS 93.90.232.32:1080",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 54.46.6.234:3129",
        "SOCKS 64.225.42.129:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}