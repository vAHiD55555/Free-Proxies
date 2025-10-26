function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.253.88.242:999",
        "SOCKS 16.78.104.244:9078",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 103.118.175.107:8080",
        "SOCKS 103.25.210.102:348",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 91.185.45.92:1080",
        "SOCKS 77.105.137.42:8080",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 5.183.70.46:1080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 144.91.95.238:58237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}