function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 179.96.28.58:80",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 212.48.150.38:1080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 104.128.228.69:8118",
        "SOCKS 206.123.156.217:28943",
        "SOCKS 15.235.219.112:1080",
        "SOCKS 206.123.156.222:5772",
        "SOCKS 206.123.156.191:4016",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 154.31.114.40:10001",
        "SOCKS 217.76.245.80:999",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 206.123.156.176:5977",
        "SOCKS 120.77.203.0:443",
        "SOCKS 14.56.177.44:3128",
        "SOCKS 206.123.156.177:4558",
        "SOCKS 206.123.156.223:5627",
        "SOCKS 196.65.240.113:18762",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}