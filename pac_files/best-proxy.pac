function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 213.155.11.237:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 212.77.75.25:1088",
        "SOCKS 193.148.58.181:1080",
        "SOCKS 141.148.200.249:1080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 178.208.88.28:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 3.211.120.181:443",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 45.55.159.111:9066",
        "SOCKS 159.203.112.20:9061",
        "SOCKS 46.183.130.89:1080",
        "SOCKS 103.162.57.42:1080",
        "SOCKS 72.56.3.17:1080",
        "SOCKS 185.193.25.206:9050",
        "SOCKS 115.127.0.158:1080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 88.210.13.216:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}