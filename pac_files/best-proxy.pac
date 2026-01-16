function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.59.225.188:12827",
        "SOCKS 130.185.123.54:3128",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 78.12.143.148:20000",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 120.77.203.0:443",
        "SOCKS 72.240.9.63:80",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 37.120.162.180:30661",
        "SOCKS 62.60.131.178:18840",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 37.120.162.180:34493",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 223.113.89.138:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}