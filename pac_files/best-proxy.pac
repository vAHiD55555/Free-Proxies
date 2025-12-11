function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.131:1020",
        "SOCKS 98.90.249.67:8080",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 103.133.24.5:8080",
        "SOCKS 47.236.119.15:10800",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 185.200.179.140:50401",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 200.29.232.230:8080",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 103.245.237.189:60001",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 47.84.70.29:8888",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 103.230.63.65:1120",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}