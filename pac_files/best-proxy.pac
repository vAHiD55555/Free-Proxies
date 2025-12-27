function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.222.234.245:1145",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 203.189.150.44:1080",
        "SOCKS 154.73.28.79:8080",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 103.187.38.38:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 82.223.165.28:38245",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 202.62.52.58:1080",
        "SOCKS 94.230.127.180:1080",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 103.16.62.138:10888",
        "SOCKS 193.233.254.7:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 103.189.63.149:53053",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}