function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.172.84.215:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 14.56.118.184:3128",
        "SOCKS 14.56.177.44:3128",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 77.93.42.198:1080",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 117.1.48.242:20005",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 121.128.121.54:3128",
        "SOCKS 138.124.53.25:7443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}