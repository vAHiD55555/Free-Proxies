function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.19.49.8:1080",
        "SOCKS 206.123.156.196:5651",
        "SOCKS 123.54.197.53:22572",
        "SOCKS 213.35.110.67:10906",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 212.41.26.160:10808",
        "SOCKS 47.77.193.180:1080",
        "SOCKS 43.160.195.20:20005",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 206.123.156.178:4503",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 195.19.50.79:1080",
        "SOCKS 123.54.197.53:20256",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 120.77.203.0:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}