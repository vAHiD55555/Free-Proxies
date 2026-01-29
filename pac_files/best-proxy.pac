function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.204:19543",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 115.127.105.163:6699",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 62.60.131.205:6979",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 91.107.154.88:443",
        "SOCKS 209.97.150.167:8080",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 62.60.131.203:4864",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 62.60.131.253:9101",
        "SOCKS 159.8.114.37:80",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 62.60.131.253:8426",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 62.60.131.205:4983",
        "SOCKS 193.34.95.110:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}