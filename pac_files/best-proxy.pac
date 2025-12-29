function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.201.39.14:4145",
        "SOCKS 94.74.91.27:1081",
        "SOCKS 115.127.181.62:2026",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 37.220.81.2:10999",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 212.34.155.126:5555",
        "SOCKS 120.77.203.0:443",
        "SOCKS 203.74.125.18:8888",
        "SOCKS 85.113.43.181:1080",
        "SOCKS 14.19.176.188:1080",
        "SOCKS 36.255.98.167:4944",
        "SOCKS 5.129.214.202:10999",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 14.239.54.62:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}