function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.152:32472",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 36.255.98.178:8601",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 103.28.121.58:80",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 103.244.107.150:8080",
        "SOCKS 46.8.78.25:8888",
        "SOCKS 36.255.98.151:13126",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}