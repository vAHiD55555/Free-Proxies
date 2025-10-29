function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.98.49.110:8080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 152.53.36.101:10061",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 47.239.10.156:1100",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 202.178.120.30:1080",
        "SOCKS 147.75.34.105:443",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 163.223.231.155:59152",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 207.254.28.68:2025",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 24.52.33.75:8080",
        "SOCKS 44.251.173.250:368",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}