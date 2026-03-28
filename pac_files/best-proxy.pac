function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.59.7.217:36590",
        "SOCKS 45.136.131.62:8449",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 38.34.179.79:8451",
        "SOCKS 38.34.178.175:8448",
        "SOCKS 45.136.131.27:8444",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 38.34.179.34:8443",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 38.145.208.196:8443",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 45.136.130.184:8443",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 159.8.114.37:80",
        "SOCKS 38.145.220.34:8443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}