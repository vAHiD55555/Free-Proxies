function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.229.107.106:80",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 35.173.76.39:8080",
        "SOCKS 18.135.126.187:8080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 94.230.127.180:1080",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 185.125.23.109:8899",
        "SOCKS 87.251.66.73:8080",
        "SOCKS 162.251.108.145:3128",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 194.87.77.22:80",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 13.215.198.118:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}