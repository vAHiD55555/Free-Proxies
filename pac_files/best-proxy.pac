function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 198.177.254.157:4145",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 103.54.217.82:8199",
        "SOCKS 121.167.212.146:8089",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 54.173.77.49:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}