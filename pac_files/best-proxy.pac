function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.119.141.228:61080",
        "SOCKS 47.237.6.99:1080",
        "SOCKS 8.215.3.250:8008",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 155.94.163.198:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 89.58.45.94:34599",
        "SOCKS 187.49.176.141:8080",
        "SOCKS 37.221.193.221:28632",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 89.58.45.94:10111",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 89.58.45.94:32160",
        "SOCKS 106.52.187.222:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}