function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.86.43.255:1024",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 203.190.117.251:8123",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 85.192.56.4:48716",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 36.255.98.167:8887",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 158.160.215.167:8123",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 45.156.186.105:12988",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 36.255.98.182:4090",
        "SOCKS 36.255.98.160:4144",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 166.249.54.61:7234",
        "SOCKS 103.174.178.137:1020",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}