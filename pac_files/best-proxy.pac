function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.173:24063",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 171.244.129.3:3128",
        "SOCKS 185.155.99.114:8118",
        "SOCKS 103.160.205.86:8080",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 211.230.49.122:3128",
        "SOCKS 171.228.166.129:1001",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 201.139.115.206:8081",
        "SOCKS 191.101.190.175:3127",
        "SOCKS 171.228.47.183:30569",
        "SOCKS 72.10.160.172:5699",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 91.84.99.28:80",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 67.43.228.250:16043",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}