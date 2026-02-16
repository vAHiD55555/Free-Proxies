function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.64.130:16379",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 72.10.160.170:21277",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 104.128.228.69:8118",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 72.10.160.173:30021",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 123.54.197.25:22127",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 79.122.230.20:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}