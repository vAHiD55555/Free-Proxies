function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.190.91.223:7897",
        "SOCKS 212.48.150.38:1080",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 154.124.240.161:50161",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 43.208.16.199:30756",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 193.3.23.197:443",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 61.72.221.194:3128",
        "SOCKS 94.155.175.135:8080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 67.169.98.211:443",
        "SOCKS 64.181.240.152:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}