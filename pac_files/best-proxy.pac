function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.77.37.39:2030",
        "SOCKS 151.243.169.161:9050",
        "SOCKS 81.168.119.85:443",
        "SOCKS 147.45.39.160:30000",
        "SOCKS 59.38.113.185:20000",
        "SOCKS 213.176.113.24:50001",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 159.195.49.27:1080",
        "SOCKS 160.22.200.60:69",
        "SOCKS 47.238.236.151:5555",
        "SOCKS 13.215.27.14:1080",
        "SOCKS 95.217.167.252:11111",
        "SOCKS 85.122.120.119:30016",
        "SOCKS 130.49.187.61:1082",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 85.198.102.172:1080",
        "SOCKS 216.105.166.190:1080",
        "SOCKS 45.133.210.241:1080",
        "SOCKS 77.110.102.252:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}