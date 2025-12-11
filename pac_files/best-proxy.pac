function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.87.77.22:80",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 121.230.8.220:1080",
        "SOCKS 45.144.234.129:53764",
        "SOCKS 74.249.180.117:3128",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 124.221.164.32:7890",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 59.153.18.174:1120",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 38.41.12.89:999",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 72.10.160.94:2187",
        "SOCKS 103.181.255.69:1111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}