function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 128.140.76.145:14954",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 115.127.107.106:1080",
        "SOCKS 54.180.162.34:3128",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 120.77.203.0:443",
        "SOCKS 67.43.228.252:31167",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 104.206.98.154:3128",
        "SOCKS 193.181.35.106:8118",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 135.181.203.208:80",
        "SOCKS 121.42.9.57:7201",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}