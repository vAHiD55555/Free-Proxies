function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.9.238.173:47679",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 152.70.137.18:8888",
        "SOCKS 168.253.92.93:10808",
        "SOCKS 160.250.226.118:8090",
        "SOCKS 154.16.41.18:5555",
        "SOCKS 37.120.162.180:21065",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 5.199.169.254:9090",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 109.196.140.199:1080",
        "SOCKS 67.201.58.190:4145",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 196.202.91.43:8080",
        "SOCKS 124.248.190.48:1080",
        "SOCKS 169.57.157.146:8123",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}