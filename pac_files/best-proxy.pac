function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.68.133:8811",
        "SOCKS 123.54.197.24:20829",
        "SOCKS 123.54.197.24:20888",
        "SOCKS 193.232.178.37:1080",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 188.235.21.247:2080",
        "SOCKS 178.72.129.20:8443",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 85.121.50.232:50161",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 123.54.197.51:21018",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 37.187.92.9:1030",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 123.54.197.50:22709",
        "SOCKS 123.54.197.19:22719",
        "SOCKS 123.54.197.20:23554",
        "SOCKS 123.54.197.25:20064",
        "SOCKS 167.172.109.12:41491",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}