function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.137:1020",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 43.130.52.194:8118",
        "SOCKS 103.153.34.2:1111",
        "SOCKS 185.93.89.158:5509",
        "SOCKS 185.93.89.180:8187",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 185.93.89.158:10104",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 185.93.89.147:23793",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 185.93.89.147:4318",
        "SOCKS 89.58.45.94:45300",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 185.93.89.145:9315",
        "SOCKS 218.6.105.152:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}