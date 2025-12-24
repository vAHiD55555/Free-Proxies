function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.51:5719",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 89.46.249.145:9876",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 115.127.176.114:6969",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 195.39.233.14:44567",
        "SOCKS 203.189.151.19:1080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 202.62.59.234:1080",
        "SOCKS 116.203.139.209:3128",
        "SOCKS 88.99.26.62:8888",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 190.130.6.11:8080",
        "SOCKS 110.235.248.81:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}