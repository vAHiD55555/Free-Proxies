function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.255.252:1080",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 130.162.141.185:52916",
        "SOCKS 47.82.68.249:1011",
        "SOCKS 165.99.14.18:1111",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 212.12.17.83:1080",
        "SOCKS 103.138.144.202:1999",
        "SOCKS 152.32.203.130:10808",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 109.200.111.171:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 150.241.91.238:7777",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 87.239.251.202:1081",
        "SOCKS 141.98.169.30:8080",
        "SOCKS 186.5.94.207:999",
        "SOCKS 5.149.208.240:1080",
        "SOCKS 67.210.146.50:11080",
        "SOCKS 160.22.17.4:9988",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}