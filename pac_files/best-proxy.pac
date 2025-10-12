function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.216.253.50:20000",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 72.10.160.173:24063",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 103.82.134.199:8888",
        "SOCKS 147.135.62.204:9052",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 45.166.93.113:999",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 5.63.50.53:3128",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 5.61.62.24:8118",
        "SOCKS 8.211.195.173:9080",
        "SOCKS 110.141.237.221:5200",
        "SOCKS 169.155.48.155:3128",
        "SOCKS 87.248.153.221:8082",
        "SOCKS 117.161.170.163:9269",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}