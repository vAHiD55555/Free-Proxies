function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.37.123.166:1081",
        "SOCKS 207.180.205.36:1080",
        "SOCKS 103.239.52.100:1080",
        "SOCKS 124.41.225.101:1080",
        "SOCKS 185.133.239.244:32784",
        "SOCKS 169.155.50.87:1080",
        "SOCKS 158.101.8.92:1080",
        "SOCKS 65.20.108.253:1080",
        "SOCKS 212.46.208.183:1080",
        "SOCKS 47.82.119.233:1011",
        "SOCKS 43.203.195.46:80",
        "SOCKS 147.45.66.117:1082",
        "SOCKS 144.22.165.206:1088",
        "SOCKS 59.36.210.211:13552",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 37.204.230.182:1080",
        "SOCKS 195.91.129.101:1337",
        "SOCKS 54.46.6.234:3129",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}