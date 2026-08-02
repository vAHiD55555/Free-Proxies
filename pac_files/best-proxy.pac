function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.76.80.215:1080",
        "SOCKS 43.161.239.147:8888",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 37.49.224.167:1080",
        "SOCKS 65.108.246.14:9050",
        "SOCKS 107.173.230.93:40000",
        "SOCKS 185.109.244.69:8080",
        "SOCKS 43.155.232.123:1080",
        "SOCKS 146.103.110.73:1080",
        "SOCKS 138.199.25.13:3903",
        "SOCKS 8.215.25.3:2080",
        "SOCKS 72.36.32.222:9050",
        "SOCKS 176.12.65.24:443",
        "SOCKS 131.153.163.130:52204",
        "SOCKS 84.54.217.219:1080",
        "SOCKS 91.107.252.85:7070",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 147.15.17.132:1081",
        "SOCKS 194.163.182.6:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}