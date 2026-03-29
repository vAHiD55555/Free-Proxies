function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.98:5566",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 38.145.208.163:8443",
        "SOCKS 38.34.179.77:8445",
        "SOCKS 45.136.131.62:8449",
        "SOCKS 123.54.197.19:20138",
        "SOCKS 113.160.132.26:8080",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 38.34.179.185:8443",
        "SOCKS 159.223.53.194:1080",
        "SOCKS 38.145.203.108:8443",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 38.34.179.102:8448",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 38.145.208.211:8453",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 38.145.208.166:8443",
        "SOCKS 38.34.179.98:8451",
        "SOCKS 104.248.146.99:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}