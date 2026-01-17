function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.180.140.254:1080",
        "SOCKS 195.98.82.62:1080",
        "SOCKS 138.199.25.13:3901",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 62.60.131.184:6704",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 103.167.229.147:8080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 103.173.139.22:8080",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 103.166.124.249:8199",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 43.208.16.9:9992",
        "SOCKS 62.60.131.191:4022",
        "SOCKS 84.255.40.228:8998",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}