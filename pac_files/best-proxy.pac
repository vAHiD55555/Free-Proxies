function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.121.240.114:3256",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 217.76.245.80:999",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 67.43.236.20:2589",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 46.8.64.199:1080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 67.43.236.19:33173",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 14.167.51.72:5000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}