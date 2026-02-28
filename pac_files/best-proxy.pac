function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.249.65.191:3128",
        "SOCKS 173.249.5.133:1080",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 104.248.59.38:80",
        "SOCKS 83.239.34.82:8080",
        "SOCKS 37.27.100.102:443",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 83.228.224.172:1090",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 45.125.67.37:8443",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 194.233.68.54:1088",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 78.135.105.217:50504",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}