function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.248.184.144:1080",
        "SOCKS 110.235.246.62:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 124.248.190.47:1080",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 193.233.254.8:1080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 78.140.46.48:1080",
        "SOCKS 103.167.169.22:8080",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 3.24.178.81:80",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 45.88.0.114:3128",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 110.235.249.88:1080",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 205.185.123.62:2555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}