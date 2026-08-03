function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 160.22.200.60:69",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 109.123.251.109:1080",
        "SOCKS 115.136.121.54:9050",
        "SOCKS 45.130.201.172:1080",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 178.250.156.112:443",
        "SOCKS 168.119.173.104:41346",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 91.142.75.202:1080",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 163.192.14.135:50161",
        "SOCKS 103.176.187.228:9090",
        "SOCKS 5.255.123.162:1080",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 154.219.125.240:58367",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 176.37.107.86:11111",
        "SOCKS 85.122.120.119:30016",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}