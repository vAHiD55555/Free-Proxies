function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.35.188.243:3128",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 136.49.37.227:8888",
        "SOCKS 118.145.198.145:10809",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 51.92.196.114:8915",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 103.230.63.65:1120",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 43.133.32.76:1777",
        "SOCKS 31.211.69.52:3128",
        "SOCKS 212.23.69.121:1080",
        "SOCKS 149.129.226.9:5060",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 47.79.40.185:12462",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 195.98.82.62:1080",
        "SOCKS 103.133.27.179:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}