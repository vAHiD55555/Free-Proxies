function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.62.50:1088",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 62.60.131.195:4259",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 67.43.236.18:23579",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 103.250.70.14:1120",
        "SOCKS 140.238.184.182:3128",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 36.255.98.160:7292",
        "SOCKS 62.60.131.183:5588",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}