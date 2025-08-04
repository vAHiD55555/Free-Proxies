function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.28.220.26:8080",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 103.245.205.142:35158",
        "SOCKS 47.90.205.231:33333",
        "SOCKS 1.52.196.1:16000",
        "SOCKS 212.110.188.189:34405",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 13.211.233.22:36619",
        "SOCKS 8.219.229.53:1081",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 69.64.48.129:25582",
        "SOCKS 202.137.14.57:8085",
        "SOCKS 157.173.101.217:3128",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 27.79.204.217:16000",
        "SOCKS 43.224.8.116:6667",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}