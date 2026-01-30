function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.199.166.243:9114",
        "SOCKS 62.60.131.205:4859",
        "SOCKS 62.60.131.204:4002",
        "SOCKS 195.175.31.222:8080",
        "SOCKS 36.255.98.161:5703",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 209.97.150.167:8080",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 88.99.30.148:5051",
        "SOCKS 47.86.41.142:1024",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 62.60.131.205:4091",
        "SOCKS 62.60.131.205:6979",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 200.174.198.32:8888",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 62.60.131.205:5441",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}