function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 81.70.62.145:15163",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 109.172.55.177:1082",
        "SOCKS 93.90.231.101:1080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 178.150.77.204:10801",
        "SOCKS 163.223.231.121:59118",
        "SOCKS 72.56.106.48:443",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 217.12.209.4:1080",
        "SOCKS 144.22.165.206:1088",
        "SOCKS 5.230.201.154:1080",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 47.238.60.156:13",
        "SOCKS 160.250.54.7:9000",
        "SOCKS 8.212.165.164:5003",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 144.31.222.106:7890",
        "SOCKS 185.200.176.236:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}