function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 191.243.46.33:43241",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 34.48.171.130:33080",
        "SOCKS 49.254.107.191:22685",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 171.228.154.82:4001",
        "SOCKS 186.96.73.17:999",
        "SOCKS 202.232.52.162:8080",
        "SOCKS 173.209.63.69:8111",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 162.223.89.83:1080",
        "SOCKS 27.71.228.32:3128",
        "SOCKS 103.247.240.34:8080",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 90.156.197.189:8080",
        "SOCKS 67.43.236.18:3927",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}