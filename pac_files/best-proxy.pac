function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.157.78.22:8199",
        "SOCKS 5.255.123.162:1080",
        "SOCKS 61.9.32.142:58765",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 77.245.76.107:1080",
        "SOCKS 163.61.70.4:9000",
        "SOCKS 138.124.59.186:1080",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 120.220.197.194:59999",
        "SOCKS 110.49.66.210:8080",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 109.120.155.157:1080",
        "SOCKS 103.163.244.106:1080",
        "SOCKS 89.169.168.25:6101",
        "SOCKS 185.99.3.100:995",
        "SOCKS 91.209.71.84:9098",
        "SOCKS 206.123.156.232:5352",
        "SOCKS 207.246.234.115:4669",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 152.32.219.123:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}