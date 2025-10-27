function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:20141",
        "SOCKS 82.223.165.28:18356",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 179.96.28.58:80",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 47.239.10.156:1100",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 121.230.9.202:55823",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 47.120.36.32:9011",
        "SOCKS 121.43.196.210:8222",
        "SOCKS 218.4.192.62:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}