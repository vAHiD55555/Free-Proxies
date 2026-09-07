function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 191.44.125.7:8080",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 168.119.173.104:47486",
        "SOCKS 103.136.106.5:1081",
        "SOCKS 195.19.50.226:1080",
        "SOCKS 190.223.41.250:999",
        "SOCKS 109.95.61.203:1080",
        "SOCKS 178.214.201.74:7080",
        "SOCKS 144.91.83.56:9050",
        "SOCKS 77.95.201.16:9150",
        "SOCKS 174.138.162.37:30940",
        "SOCKS 110.232.92.228:2404",
        "SOCKS 13.125.44.24:80",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 128.127.144.148:1080",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 47.239.140.6:443",
        "SOCKS 103.3.59.209:8080",
        "SOCKS 107.173.42.121:7890",
        "SOCKS 174.138.162.34:53511",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}