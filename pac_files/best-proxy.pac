function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.32.177.152:1080",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 103.216.49.147:1080",
        "SOCKS 45.130.21.115:18081",
        "SOCKS 47.82.83.43:1011",
        "SOCKS 45.74.178.43:9121",
        "SOCKS 8.215.25.3:2080",
        "SOCKS 185.171.83.65:49153",
        "SOCKS 150.242.218.137:1080",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 113.176.118.150:1080",
        "SOCKS 92.42.96.84:3128",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 85.113.43.181:1080",
        "SOCKS 43.156.84.41:10808",
        "SOCKS 45.87.140.155:8080",
        "SOCKS 47.250.140.201:7000",
        "SOCKS 112.90.88.102:20000",
        "SOCKS 110.49.66.210:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}