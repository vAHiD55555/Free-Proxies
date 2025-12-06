function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 84.17.51.235:3128",
        "SOCKS 5.104.75.104:3128",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 115.114.77.133:9090",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 35.180.188.216:80",
        "SOCKS 223.25.109.163:8199",
        "SOCKS 72.10.160.94:8911",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 67.43.228.252:3981",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}