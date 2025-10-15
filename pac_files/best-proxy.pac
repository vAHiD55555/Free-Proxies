function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.205.153.110:51528",
        "SOCKS 181.39.24.154:999",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 198.54.124.88:8080",
        "SOCKS 103.179.218.14:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 103.151.30.133:1080",
        "SOCKS 27.124.80.58:82",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 152.53.36.101:10521",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 202.40.178.254:9095",
        "SOCKS 160.25.8.131:11011",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}