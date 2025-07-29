function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.236.163.74:8080",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 51.158.70.223:16379",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 179.96.28.58:80",
        "SOCKS 27.79.242.170:16000",
        "SOCKS 82.223.165.28:18356",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 1.52.140.110:16000",
        "SOCKS 46.226.160.32:3128",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 1.55.60.217:16000",
        "SOCKS 94.136.188.78:4003",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 59.29.182.162:8888",
        "SOCKS 65.108.159.129:8081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}