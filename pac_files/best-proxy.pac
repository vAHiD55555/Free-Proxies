function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 163.47.37.190:1080",
        "SOCKS 67.43.236.19:29535",
        "SOCKS 94.74.91.27:1081",
        "SOCKS 72.10.160.90:12297",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 89.43.133.197:8080",
        "SOCKS 190.192.45.168:3128",
        "SOCKS 203.189.154.129:1080",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 47.254.36.213:50",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 202.47.185.2:8080",
        "SOCKS 203.189.154.20:1080",
        "SOCKS 72.10.160.91:13103",
        "SOCKS 180.149.234.74:6214",
        "SOCKS 49.156.151.246:83",
        "SOCKS 43.208.240.77:12587",
        "SOCKS 93.113.63.73:33100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}