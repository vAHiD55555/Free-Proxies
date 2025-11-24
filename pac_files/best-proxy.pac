function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.198:5566",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 115.127.107.106:1080",
        "SOCKS 89.58.45.94:17045",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 8.218.14.254:1100",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 116.12.157.197:33333",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 31.211.130.237:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}