function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.203.139.209:5678",
        "SOCKS 47.242.15.120:1111",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 135.181.203.208:80",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 8.215.31.146:1347",
        "SOCKS 23.94.236.141:8080",
        "SOCKS 209.14.118.116:999",
        "SOCKS 202.232.52.162:8080",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 72.211.46.99:4145",
        "SOCKS 47.242.130.60:1111",
        "SOCKS 171.228.181.175:2001",
        "SOCKS 38.147.98.190:8080",
        "SOCKS 72.10.160.172:28327",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}