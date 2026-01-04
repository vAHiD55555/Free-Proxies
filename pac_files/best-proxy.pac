function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.189:7788",
        "SOCKS 43.167.216.119:6006",
        "SOCKS 43.167.186.76:6006",
        "SOCKS 113.176.118.150:1080",
        "SOCKS 43.133.15.45:6006",
        "SOCKS 43.167.224.103:6006",
        "SOCKS 46.150.102.26:1080",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 72.214.108.67:4145",
        "SOCKS 62.60.131.197:4100",
        "SOCKS 43.167.243.165:6006",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 203.189.156.212:1080",
        "SOCKS 36.255.98.160:19088",
        "SOCKS 36.255.98.160:7292",
        "SOCKS 43.167.247.63:6006",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 103.147.246.77:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}