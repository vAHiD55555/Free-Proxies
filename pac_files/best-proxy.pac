function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.162.180:42524",
        "SOCKS 36.255.98.163:4183",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 47.251.73.54:11",
        "SOCKS 14.103.9.129:7890",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 37.120.162.180:15205",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 36.255.98.150:18543",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 88.216.68.25:9119",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 46.8.78.25:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}