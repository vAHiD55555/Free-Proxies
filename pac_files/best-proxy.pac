function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 172.86.88.104:1080",
        "SOCKS 163.128.140.44:1080",
        "SOCKS 66.151.34.192:1080",
        "SOCKS 89.23.10.170:1080",
        "SOCKS 95.111.228.190:1082",
        "SOCKS 45.74.31.41:4134",
        "SOCKS 154.222.24.161:1080",
        "SOCKS 95.165.69.128:1080",
        "SOCKS 45.74.31.46:4945",
        "SOCKS 45.74.31.41:4604",
        "SOCKS 49.13.87.123:1162",
        "SOCKS 45.74.31.46:4180",
        "SOCKS 49.13.87.123:1235",
        "SOCKS 81.28.6.1:1080",
        "SOCKS 203.189.153.170:1080",
        "SOCKS 45.74.31.41:4419",
        "SOCKS 45.74.31.41:4266",
        "SOCKS 46.8.224.206:1081",
        "SOCKS 101.2.166.73:1080",
        "SOCKS 37.49.224.167:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}