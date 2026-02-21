function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.117.250:1080",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 20.78.213.56:80",
        "SOCKS 95.216.17.79:3888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}