function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 119.84.215.127:3256",
        "SOCKS 68.71.240.210:4145",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 159.8.114.37:80",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 24.37.120.42:1080",
        "SOCKS 202.62.42.167:1080",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 119.93.252.134:1452",
        "SOCKS 45.22.209.157:8888",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 66.211.155.34:8080",
        "SOCKS 47.79.40.185:12462",
        "SOCKS 5.58.97.89:8080",
        "SOCKS 185.189.112.157:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}