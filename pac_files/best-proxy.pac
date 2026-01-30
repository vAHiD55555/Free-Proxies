function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.10.208.106:8192",
        "SOCKS 54.249.70.102:3128",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 36.255.98.177:4334",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 62.60.131.203:5083",
        "SOCKS 5.199.166.247:9077",
        "SOCKS 62.60.131.253:4094",
        "SOCKS 62.60.131.205:7511",
        "SOCKS 36.255.98.165:12053",
        "SOCKS 120.77.203.0:443",
        "SOCKS 62.60.131.204:4795",
        "SOCKS 36.255.98.181:5411",
        "SOCKS 89.22.237.70:80",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 51.222.241.8:42378",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}