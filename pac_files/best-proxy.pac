function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 77.110.102.252:1080",
        "SOCKS 43.156.84.41:10808",
        "SOCKS 13.140.164.179:3523",
        "SOCKS 8.212.168.170:8080",
        "SOCKS 103.155.62.130:1080",
        "SOCKS 31.77.198.168:9050",
        "SOCKS 45.10.42.68:1080",
        "SOCKS 202.62.50.52:1080",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 193.30.123.61:9050",
        "SOCKS 202.58.77.114:8080",
        "SOCKS 13.140.164.179:3134",
        "SOCKS 47.82.78.113:1011",
        "SOCKS 216.106.179.216:49191",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 67.210.146.50:11080",
        "SOCKS 161.35.90.93:1081",
        "SOCKS 104.207.139.62:1080",
        "SOCKS 138.124.103.223:1080",
        "SOCKS 8.212.168.170:2080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}