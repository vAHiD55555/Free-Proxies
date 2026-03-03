function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 169.57.157.146:8123",
        "SOCKS 171.249.163.170:1452",
        "SOCKS 141.0.9.176:80",
        "SOCKS 212.118.52.3:1080",
        "SOCKS 45.140.147.155:1081",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 70.186.128.126:8080",
        "SOCKS 45.80.220.89:1080",
        "SOCKS 89.23.105.206:20005",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 111.79.111.126:3128",
        "SOCKS 146.235.19.84:10805",
        "SOCKS 202.181.16.45:52929",
        "SOCKS 58.19.55.17:15350",
        "SOCKS 110.235.136.71:8081",
        "SOCKS 202.79.26.254:1080",
        "SOCKS 58.19.55.17:15267",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 206.123.156.176:7708",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}