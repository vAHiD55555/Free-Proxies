function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.229.107.106:80",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 62.60.131.195:25608",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 43.225.151.137:1120",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 72.10.160.91:9537",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 136.118.15.230:8000",
        "SOCKS 95.216.17.79:3888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}