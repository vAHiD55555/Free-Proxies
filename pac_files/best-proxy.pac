function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.203:4870",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 175.138.75.137:8080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 72.10.160.92:24567",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 141.98.188.201:2080",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 163.5.128.114:14270",
        "SOCKS 218.64.122.99:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}