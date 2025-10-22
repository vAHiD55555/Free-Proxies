function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.227.224.110:9051",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 137.184.152.66:20256",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 137.184.152.66:20898",
        "SOCKS 95.78.119.94:1080",
        "SOCKS 124.156.200.216:20002",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 159.223.164.184:20035",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 117.74.65.207:443",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 159.223.164.184:20125",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 121.205.213.141:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}