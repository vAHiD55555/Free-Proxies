function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 143.255.143.146:3128",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 103.168.207.42:8080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 47.105.98.23:3128",
        "SOCKS 124.248.164.61:1080",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 205.185.123.62:2555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}