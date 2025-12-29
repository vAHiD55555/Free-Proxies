function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.248.177.116:1080",
        "SOCKS 202.62.55.108:1080",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 43.133.32.76:1777",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 177.19.167.242:80",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 37.59.110.73:80",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 89.46.249.170:12345",
        "SOCKS 35.182.97.107:80",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 23.251.62.210:10080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}