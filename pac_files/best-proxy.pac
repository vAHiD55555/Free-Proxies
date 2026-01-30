function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.121.240.114:3256",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 36.255.98.177:12156",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 13.36.243.194:9899",
        "SOCKS 62.60.131.205:14785",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 36.255.98.165:4274",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 36.255.98.169:4135",
        "SOCKS 62.60.131.205:4859",
        "SOCKS 88.99.26.76:5102",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 36.255.98.165:16097",
        "SOCKS 62.60.131.204:5000",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 36.255.98.165:4201",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}