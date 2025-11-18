function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:38871",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 89.58.45.94:46763",
        "SOCKS 152.53.171.242:53281",
        "SOCKS 117.50.198.130:1080",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 152.53.171.242:16223",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 176.119.141.228:61080",
        "SOCKS 60.249.94.59:3128",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 89.58.45.94:15168",
        "SOCKS 89.58.45.94:10012",
        "SOCKS 89.58.45.94:23063",
        "SOCKS 89.58.45.94:45925",
        "SOCKS 222.127.77.167:8085",
        "SOCKS 89.58.45.94:40437",
        "SOCKS 216.185.57.251:443",
        "SOCKS 38.156.72.10:8080",
        "SOCKS 72.10.160.90:1237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}