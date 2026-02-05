function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.74.197.163:36918",
        "SOCKS 35.76.216.108:1080",
        "SOCKS 119.81.189.194:80",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 15.168.235.57:12185",
        "SOCKS 8.212.153.179:8080",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 91.217.76.97:1080",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 134.122.21.142:33346",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}