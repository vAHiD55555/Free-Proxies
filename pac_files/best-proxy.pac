function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.89.68.78:9050",
        "SOCKS 139.177.229.243:8080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 139.177.229.101:8080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 139.177.229.5:8080",
        "SOCKS 139.177.229.44:8080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 168.245.197.146:80",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 139.177.229.99:8080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 27.153.141.90:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}