function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.145.220.15:8443",
        "SOCKS 38.145.220.220:8443",
        "SOCKS 38.34.179.28:8443",
        "SOCKS 38.34.179.58:8443",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 206.123.156.186:41296",
        "SOCKS 38.145.208.209:8443",
        "SOCKS 206.123.156.196:4720",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 45.136.130.241:8448",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 38.145.208.219:8443",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 38.34.179.67:8443",
        "SOCKS 123.54.197.51:23083",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 45.136.130.139:8443",
        "SOCKS 38.145.218.113:8443",
        "SOCKS 45.136.130.220:8443",
        "SOCKS 38.34.179.71:8443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}