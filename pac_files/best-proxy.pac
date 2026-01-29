function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.22.237.70:80",
        "SOCKS 193.221.203.121:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 36.255.98.151:6338",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 36.255.98.167:4045",
        "SOCKS 139.59.1.14:80",
        "SOCKS 74.103.66.15:80",
        "SOCKS 36.255.98.169:12000",
        "SOCKS 36.255.98.177:9494",
        "SOCKS 62.60.131.204:5882",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 210.75.240.178:4781",
        "SOCKS 15.168.235.57:12185",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 47.245.117.43:80",
        "SOCKS 109.120.135.230:2030",
        "SOCKS 47.86.41.142:1024",
        "SOCKS 61.178.99.43:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}