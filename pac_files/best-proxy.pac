function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 81.90.149.188:3128",
        "SOCKS 114.130.153.122:58080",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 103.31.235.197:1111",
        "SOCKS 52.188.28.218:3128",
        "SOCKS 103.184.50.102:9090",
        "SOCKS 207.254.28.68:2025",
        "SOCKS 188.124.230.43:19445",
        "SOCKS 144.124.228.87:1080",
        "SOCKS 194.145.200.184:3128",
        "SOCKS 168.243.92.49:999",
        "SOCKS 200.39.120.78:999",
        "SOCKS 209.146.18.132:5050",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 46.16.229.254:8079",
        "SOCKS 121.132.61.211:3128",
        "SOCKS 103.191.92.157:1009",
        "SOCKS 41.128.72.131:1976",
        "SOCKS 177.234.217.82:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}