function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 94.74.91.27:1081",
        "SOCKS 222.92.185.43:12389",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 103.148.112.69:8199",
        "SOCKS 202.43.162.2:8080",
        "SOCKS 8.211.49.86:9050",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 82.26.94.116:48131",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 124.248.177.43:1080",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 185.175.47.162:1080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 115.127.182.130:2589",
        "SOCKS 202.58.77.77:1111",
        "SOCKS 160.19.16.86:1080",
        "SOCKS 51.16.209.246:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}