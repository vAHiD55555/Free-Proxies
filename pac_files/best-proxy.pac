function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.189.112.157:3128",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 123.54.197.25:21127",
        "SOCKS 45.77.246.231:80",
        "SOCKS 123.54.197.25:23350",
        "SOCKS 166.62.35.102:45775",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 13.229.107.106:80",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 47.252.11.233:14186",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 110.235.255.191:1080",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 1.12.62.237:1080",
        "SOCKS 125.129.39.95:3128",
        "SOCKS 123.54.197.51:21406",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 123.54.197.16:20532",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}