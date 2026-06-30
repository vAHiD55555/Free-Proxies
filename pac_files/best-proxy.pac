function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.126.70.111:16379",
        "SOCKS 43.134.240.25:8080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 89.40.233.13:1080",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 119.148.62.42:22122",
        "SOCKS 135.136.188.42:1080",
        "SOCKS 168.119.173.104:47486",
        "SOCKS 154.9.30.1:50000",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 208.87.201.22:1080",
        "SOCKS 172.235.198.182:1080",
        "SOCKS 213.155.11.237:1080",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 137.184.209.17:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 202.40.190.74:1080",
        "SOCKS 186.26.95.249:61445",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}