function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.253:5355",
        "SOCKS 62.60.131.253:6488",
        "SOCKS 36.255.98.177:5671",
        "SOCKS 62.60.131.204:4924",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 36.255.98.165:4201",
        "SOCKS 77.41.167.137:1080",
        "SOCKS 36.255.98.184:4371",
        "SOCKS 62.60.131.253:8426",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 36.255.98.165:12456",
        "SOCKS 36.255.98.167:4888",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 185.246.222.34:50100",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 62.60.131.203:4444",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 62.60.131.205:4859",
        "SOCKS 217.172.122.14:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}