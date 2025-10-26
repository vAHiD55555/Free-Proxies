function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.88.104.126:3344",
        "SOCKS 202.178.120.30:1080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 47.243.53.38:1122",
        "SOCKS 203.175.127.240:8080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 103.133.27.179:8080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 47.236.94.82:1100",
        "SOCKS 103.160.12.147:8199",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 152.53.36.101:25997",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 37.59.112.197:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}