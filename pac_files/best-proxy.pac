function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.243.82.38:8008",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 43.155.185.73:1080",
        "SOCKS 147.45.242.23:1080",
        "SOCKS 82.114.228.67:1080",
        "SOCKS 45.133.16.88:1080",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 185.215.160.123:1080",
        "SOCKS 107.151.148.153:1080",
        "SOCKS 48.214.144.194:8888",
        "SOCKS 201.165.172.3:1080",
        "SOCKS 165.16.192.205:1080",
        "SOCKS 88.99.82.67:443",
        "SOCKS 92.205.186.129:1080",
        "SOCKS 45.9.14.77:8899",
        "SOCKS 194.177.28.66:10808",
        "SOCKS 91.222.237.40:1080",
        "SOCKS 131.153.163.130:9050",
        "SOCKS 146.103.110.73:1080",
        "SOCKS 47.82.112.38:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}