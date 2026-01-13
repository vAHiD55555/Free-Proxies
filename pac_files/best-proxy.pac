function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.88.104.126:3344",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 123.200.10.46:8081",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 192.145.31.78:8080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 8.211.194.78:6379",
        "SOCKS 160.20.55.230:8080",
        "SOCKS 138.199.25.13:3901",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 89.108.83.137:1080",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 205.185.120.241:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}