function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.31.255.9:1080",
        "SOCKS 45.74.31.46:5189",
        "SOCKS 47.79.78.76:18080",
        "SOCKS 80.249.81.179:9050",
        "SOCKS 45.74.31.40:4876",
        "SOCKS 45.74.31.40:6519",
        "SOCKS 45.74.31.46:8206",
        "SOCKS 45.74.31.41:7859",
        "SOCKS 190.12.95.170:47029",
        "SOCKS 146.103.125.38:9054",
        "SOCKS 108.174.152.80:1080",
        "SOCKS 45.74.31.41:4178",
        "SOCKS 103.154.90.90:69",
        "SOCKS 47.92.219.102:8085",
        "SOCKS 45.74.31.47:5899",
        "SOCKS 45.74.31.42:7909",
        "SOCKS 45.74.31.42:7763",
        "SOCKS 8.222.160.208:3333",
        "SOCKS 23.142.36.180:1080",
        "SOCKS 47.238.185.110:9999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}