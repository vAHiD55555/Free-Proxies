function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 18.60.222.217:57032",
        "SOCKS 157.66.16.52:8080",
        "SOCKS 222.59.173.105:44096",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 89.58.45.94:31028",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 183.232.157.102:1100",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 147.75.34.105:443",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 120.77.203.0:443",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 119.15.86.30:8080",
        "SOCKS 222.129.35.9:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}