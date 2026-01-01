function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.250.155.254:8004",
        "SOCKS 203.189.152.79:1080",
        "SOCKS 41.65.160.173:1977",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 188.191.164.55:4890",
        "SOCKS 72.10.160.170:4197",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 110.235.249.88:1080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 202.40.184.54:64564",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}