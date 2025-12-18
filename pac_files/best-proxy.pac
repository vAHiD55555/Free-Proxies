function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.164.226.253:4216",
        "SOCKS 128.140.76.145:10003",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 8.222.234.245:1145",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 203.189.137.127:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 43.208.25.125:14",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 72.10.160.171:25085",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 172.211.197.17:8080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 67.43.228.254:32715",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 222.71.131.131:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}