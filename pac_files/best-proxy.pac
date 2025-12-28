function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.91.95.238:58237",
        "SOCKS 202.96.165.47:7890",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 115.127.178.30:2589",
        "SOCKS 72.10.160.171:7719",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 41.65.160.172:1976",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 62.60.131.194:8187",
        "SOCKS 222.59.173.105:44186",
        "SOCKS 36.255.98.163:9315",
        "SOCKS 121.169.46.116:1090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}