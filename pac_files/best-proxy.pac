function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.244.114.54:1080",
        "SOCKS 103.142.255.33:69",
        "SOCKS 45.76.13.121:49995",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 107.173.42.121:7890",
        "SOCKS 103.142.255.32:1080",
        "SOCKS 66.59.197.62:4000",
        "SOCKS 31.76.80.215:1080",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 178.216.223.147:1080",
        "SOCKS 51.178.49.241:1088",
        "SOCKS 103.189.197.79:8080",
        "SOCKS 139.180.220.101:1080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 103.121.120.242:1080",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 13.140.164.179:3665",
        "SOCKS 47.75.116.41:10800",
        "SOCKS 47.236.177.236:1080",
        "SOCKS 15.204.14.242:30017",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}