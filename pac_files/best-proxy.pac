function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.22.175.58:1080",
        "SOCKS 101.231.64.89:8443",
        "SOCKS 85.133.240.75:8080",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 45.166.93.113:999",
        "SOCKS 103.17.246.60:1080",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 116.96.92.112:16000",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 1.54.145.15:16000",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 154.236.177.105:1976",
        "SOCKS 135.181.203.208:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}