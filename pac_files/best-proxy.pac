function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 34.48.171.130:33080",
        "SOCKS 103.250.70.14:1120",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 121.167.212.149:8130",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 115.127.180.146:6969",
        "SOCKS 110.41.83.41:8790",
        "SOCKS 209.97.143.120:3128",
        "SOCKS 13.229.107.106:80",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 193.239.86.248:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}