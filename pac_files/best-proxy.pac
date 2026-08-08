function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.163.174.78:1087",
        "SOCKS 175.27.250.85:44092",
        "SOCKS 178.250.156.112:443",
        "SOCKS 185.252.147.44:1080",
        "SOCKS 47.250.115.134:1080",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 31.162.174.18:8080",
        "SOCKS 178.130.47.21:1082",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 217.12.209.4:1080",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 90.188.47.211:10808",
        "SOCKS 144.124.232.204:443",
        "SOCKS 178.150.77.204:10801",
        "SOCKS 165.154.3.4:10808",
        "SOCKS 91.243.195.9:35860",
        "SOCKS 161.35.90.93:1081",
        "SOCKS 103.103.146.149:7080",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 193.124.64.142:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}