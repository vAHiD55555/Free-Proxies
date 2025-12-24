function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.137:1020",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 47.81.14.7:3128",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 194.28.61.21:1080",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 139.177.229.104:8080",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 125.209.110.83:39617",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 139.177.229.244:8080",
        "SOCKS 47.83.27.173:1122",
        "SOCKS 67.205.153.110:51528",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}