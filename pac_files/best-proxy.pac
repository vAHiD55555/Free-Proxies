function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.51:5719",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 139.59.24.173:1080",
        "SOCKS 47.83.133.157:50161",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 18.141.177.23:80",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 194.59.204.87:9080",
        "SOCKS 123.54.197.52:23031",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 123.54.197.19:22304",
        "SOCKS 123.54.197.20:22846",
        "SOCKS 103.118.252.100:50161",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 116.107.94.3:10001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}