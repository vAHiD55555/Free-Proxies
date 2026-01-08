function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.222.151.218:5566",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 67.43.236.20:20867",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 62.60.131.178:5957",
        "SOCKS 47.239.61.82:9001",
        "SOCKS 36.255.98.160:8123",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 185.248.101.52:60023",
        "SOCKS 103.78.98.74:8888",
        "SOCKS 100.27.183.62:8080",
        "SOCKS 36.255.98.180:6588",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 39.170.85.129:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}