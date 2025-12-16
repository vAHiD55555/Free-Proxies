function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.221.196.157:35904",
        "SOCKS 198.23.189.151:8118",
        "SOCKS 37.79.248.2:8090",
        "SOCKS 47.79.40.185:12462",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 72.10.160.93:7741",
        "SOCKS 88.99.81.188:8888",
        "SOCKS 115.190.24.138:8080",
        "SOCKS 154.236.177.101:1977",
        "SOCKS 146.56.117.33:1080",
        "SOCKS 67.43.228.250:7413",
        "SOCKS 47.237.70.144:1011",
        "SOCKS 52.201.85.24:80",
        "SOCKS 72.10.160.172:5959",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 82.26.150.55:1080",
        "SOCKS 128.140.76.145:21213",
        "SOCKS 115.127.176.186:2026",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 50.60.120.172:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}