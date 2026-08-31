function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.125.44.24:80",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 118.69.32.171:20000",
        "SOCKS 101.96.219.251:44099",
        "SOCKS 77.90.8.154:9083",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 47.82.67.48:1011",
        "SOCKS 202.78.167.58:9050",
        "SOCKS 101.96.219.251:44188",
        "SOCKS 174.138.165.213:9255",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 118.145.128.100:44109",
        "SOCKS 101.96.219.251:44005",
        "SOCKS 3.10.170.234:3128",
        "SOCKS 2.144.6.22:9090",
        "SOCKS 185.248.179.99:8080",
        "SOCKS 45.74.31.30:5635",
        "SOCKS 101.96.219.251:44037",
        "SOCKS 118.145.128.100:44070",
        "SOCKS 47.243.19.177:1011",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}