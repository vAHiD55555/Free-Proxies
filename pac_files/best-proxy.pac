function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.236.187.104:40355",
        "SOCKS 94.130.16.48:30124",
        "SOCKS 38.145.203.108:8443",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 186.148.180.46:999",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 45.136.131.41:8448",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 38.34.179.61:8445",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 38.145.220.56:8443",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 38.34.179.47:8452",
        "SOCKS 45.136.131.46:8448",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}