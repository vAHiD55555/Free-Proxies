function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.201.39.14:4145",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 8.218.131.174:1100",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 54.94.166.33:80",
        "SOCKS 103.73.161.148:1080",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 8.212.175.74:8080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 103.226.232.205:8099",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 128.140.76.145:36977",
        "SOCKS 130.193.57.247:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}