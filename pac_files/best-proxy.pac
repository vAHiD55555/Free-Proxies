function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.253:3881",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 103.133.26.100:8181",
        "SOCKS 78.12.223.246:1720",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 61.9.34.118:58765",
        "SOCKS 180.191.23.95:8081",
        "SOCKS 45.190.52.24:8080",
        "SOCKS 38.194.231.70:999",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 101.255.107.181:8090",
        "SOCKS 67.43.228.252:1173",
        "SOCKS 157.10.97.85:1111",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 157.10.89.203:8880",
        "SOCKS 102.0.18.198:8080",
        "SOCKS 45.122.123.29:1452",
        "SOCKS 18.143.165.238:9090",
        "SOCKS 14.103.146.174:7890",
        "SOCKS 103.189.218.85:6969",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}