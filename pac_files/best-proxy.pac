function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.51:5719",
        "SOCKS 8.213.197.208:9080",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 18.192.100.176:8080",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 123.54.197.53:21201",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 45.140.147.155:1081",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 179.96.28.58:80",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 123.54.197.19:20261",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}