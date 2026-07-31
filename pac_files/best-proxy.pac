function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 101.36.104.239:10808",
        "SOCKS 221.225.48.107:8989",
        "SOCKS 202.62.42.167:1080",
        "SOCKS 195.19.50.126:1080",
        "SOCKS 131.153.163.130:30969",
        "SOCKS 213.199.47.140:1080",
        "SOCKS 167.86.79.35:1080",
        "SOCKS 78.24.180.210:8080",
        "SOCKS 47.250.155.254:9090",
        "SOCKS 103.124.197.26:8090",
        "SOCKS 103.66.46.150:69",
        "SOCKS 83.14.246.42:1080",
        "SOCKS 109.199.105.194:1080",
        "SOCKS 185.117.116.200:1080",
        "SOCKS 93.90.231.101:1080",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 193.221.203.14:1080",
        "SOCKS 159.194.228.26:1080",
        "SOCKS 65.108.159.129:8081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}