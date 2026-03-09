function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.101.0.233:3128",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 182.253.38.179:3128",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 213.165.58.8:1080",
        "SOCKS 103.84.95.54:7890",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 157.66.192.91:8080",
        "SOCKS 173.249.5.133:1080",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 206.123.156.253:5263",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 78.135.105.217:50504",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}