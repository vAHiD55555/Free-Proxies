function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.230.192.242:1080",
        "SOCKS 87.249.237.90:1080",
        "SOCKS 5.45.119.70:1080",
        "SOCKS 36.111.33.167:13128",
        "SOCKS 45.74.31.30:4310",
        "SOCKS 174.138.162.36:36830",
        "SOCKS 103.197.241.209:1080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 169.255.78.190:8865",
        "SOCKS 146.56.191.98:14785",
        "SOCKS 144.126.197.184:1088",
        "SOCKS 177.4.8.113:5555",
        "SOCKS 185.204.170.179:1150",
        "SOCKS 144.31.86.244:8443",
        "SOCKS 174.138.162.35:55857",
        "SOCKS 180.158.222.93:1080",
        "SOCKS 124.248.177.43:1080",
        "SOCKS 180.141.88.241:9009",
        "SOCKS 93.123.30.53:3128",
        "SOCKS 174.138.162.38:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}