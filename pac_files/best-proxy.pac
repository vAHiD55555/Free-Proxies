function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 161.35.31.237:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 197.232.158.189:41890",
        "SOCKS 176.119.141.228:61080",
        "SOCKS 89.58.45.94:36891",
        "SOCKS 183.232.157.102:1145",
        "SOCKS 184.95.220.42:1080",
        "SOCKS 103.84.177.28:8083",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 157.180.121.252:55555",
        "SOCKS 89.58.45.94:15867",
        "SOCKS 212.124.22.245:1080",
        "SOCKS 181.143.42.138:8080",
        "SOCKS 195.154.43.198:39522",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}