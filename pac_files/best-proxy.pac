function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.248.47.230:1080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 195.19.49.4:1080",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 49.0.0.175:1080",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 147.45.158.88:1080",
        "SOCKS 176.12.65.24:443",
        "SOCKS 45.119.97.76:80",
        "SOCKS 194.163.174.78:1081",
        "SOCKS 13.140.164.179:3728",
        "SOCKS 13.140.164.179:3598",
        "SOCKS 92.101.193.58:1080",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 109.200.111.171:1080",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 77.232.151.197:1080",
        "SOCKS 81.200.158.126:10808",
        "SOCKS 93.123.30.53:1080",
        "SOCKS 194.177.28.66:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}