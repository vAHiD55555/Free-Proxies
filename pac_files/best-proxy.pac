function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.99.113.88:6969",
        "SOCKS 160.250.54.6:9000",
        "SOCKS 176.142.245.127:9050",
        "SOCKS 64.188.63.78:1080",
        "SOCKS 47.91.120.190:13",
        "SOCKS 213.230.121.41:1080",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 103.136.107.70:1080",
        "SOCKS 193.25.215.182:22222",
        "SOCKS 194.76.172.30:1081",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 88.210.13.216:1081",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 144.124.227.191:1080",
        "SOCKS 92.119.164.84:1081",
        "SOCKS 201.165.172.14:1080",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 154.89.148.25:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}