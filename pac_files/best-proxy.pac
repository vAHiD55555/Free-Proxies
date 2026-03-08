function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.168.244.16:8080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 138.2.47.198:1080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 120.77.203.0:443",
        "SOCKS 200.201.134.184:8787",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 103.124.110.233:8090",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 45.55.246.76:1080",
        "SOCKS 217.76.245.80:999",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 115.127.178.10:2589",
        "SOCKS 206.123.156.201:37625",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 43.160.219.238:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}