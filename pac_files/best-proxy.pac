function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.165.42.166:3128",
        "SOCKS 116.80.80.201:3172",
        "SOCKS 140.246.125.194:9099",
        "SOCKS 41.223.119.156:3128",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 120.77.203.0:443",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 8.137.62.53:3128",
        "SOCKS 62.60.131.197:4853",
        "SOCKS 78.12.223.246:2724",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 203.189.152.141:1080",
        "SOCKS 36.255.98.175:4006",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 130.185.123.54:3128",
        "SOCKS 147.75.34.105:443",
        "SOCKS 45.188.167.25:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}