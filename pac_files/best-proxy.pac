function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:22791",
        "SOCKS 47.251.110.95:3128",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 89.58.45.94:36181",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 152.53.36.101:55443",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 14.142.36.210:1111",
        "SOCKS 94.138.223.202:3128",
        "SOCKS 89.58.45.94:10033",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 89.58.45.94:37085",
        "SOCKS 8.217.119.46:1011",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 152.53.171.242:27019",
        "SOCKS 89.58.45.94:21401",
        "SOCKS 103.191.218.77:8199",
        "SOCKS 89.58.45.94:34519",
        "SOCKS 190.119.160.26:56160",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}