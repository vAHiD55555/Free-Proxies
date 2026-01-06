function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 57.128.188.167:9158",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 194.87.101.69:3128",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 202.43.162.2:8080",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 202.58.77.77:1111",
        "SOCKS 115.127.180.58:2589",
        "SOCKS 159.8.114.37:80",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 180.211.187.187:8008",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 175.138.75.137:8080",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 180.183.97.16:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}