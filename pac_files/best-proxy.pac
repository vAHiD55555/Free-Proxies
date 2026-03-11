function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.188.108.12:8080",
        "SOCKS 93.91.162.222:1080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 206.123.156.191:34340",
        "SOCKS 45.81.130.110:8888",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 116.254.118.180:80",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 8.213.151.128:3128",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 79.52.170.178:1080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 23.251.62.210:10080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}