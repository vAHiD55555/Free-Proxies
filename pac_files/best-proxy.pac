function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.180.0.162:7302",
        "SOCKS 212.33.245.33:1080",
        "SOCKS 206.123.156.198:6195",
        "SOCKS 206.123.156.198:6364",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 161.97.79.227:9050",
        "SOCKS 58.19.55.88:15261",
        "SOCKS 58.19.55.7:15221",
        "SOCKS 58.19.55.88:15278",
        "SOCKS 160.250.54.7:9000",
        "SOCKS 142.132.190.228:38470",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 58.19.55.88:15140",
        "SOCKS 58.19.55.4:15036",
        "SOCKS 149.248.76.55:10000",
        "SOCKS 206.123.156.198:8548",
        "SOCKS 58.19.55.88:15231",
        "SOCKS 58.19.55.7:15225",
        "SOCKS 58.19.55.4:15144",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}