function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.164.136.189:1080",
        "SOCKS 149.248.37.215:9000",
        "SOCKS 194.113.234.125:9898",
        "SOCKS 45.74.31.42:8099",
        "SOCKS 44.193.20.213:443",
        "SOCKS 45.74.31.42:6495",
        "SOCKS 202.62.50.52:1080",
        "SOCKS 132.226.7.23:30277",
        "SOCKS 208.87.128.239:9150",
        "SOCKS 150.241.70.126:1080",
        "SOCKS 118.145.141.251:44095",
        "SOCKS 47.252.47.39:1080",
        "SOCKS 45.74.31.42:6060",
        "SOCKS 103.138.144.202:1999",
        "SOCKS 161.97.129.202:9060",
        "SOCKS 118.145.141.251:44025",
        "SOCKS 36.33.1.106:39780",
        "SOCKS 45.74.31.42:9009",
        "SOCKS 165.99.14.18:1111",
        "SOCKS 5.75.133.113:10811",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}