function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.6.105.152:4216",
        "SOCKS 34.241.45.131:8080",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 139.135.145.198:5050",
        "SOCKS 42.118.74.104:16000",
        "SOCKS 212.175.61.31:8080",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 72.195.114.169:4145",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 61.198.92.103:8080",
        "SOCKS 1.55.196.10:16000",
        "SOCKS 27.71.141.120:16000",
        "SOCKS 34.131.207.30:3128",
        "SOCKS 212.110.188.216:34405",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 103.172.17.51:8080",
        "SOCKS 134.199.159.23:1080",
        "SOCKS 18.179.46.106:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}