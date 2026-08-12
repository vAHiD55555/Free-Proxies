function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 88.148.18.101:1081",
        "SOCKS 144.124.232.204:5222",
        "SOCKS 77.110.103.146:1080",
        "SOCKS 134.122.199.224:10001",
        "SOCKS 175.27.250.85:44078",
        "SOCKS 178.104.48.190:9110",
        "SOCKS 45.32.160.61:1088",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 138.199.25.13:3901",
        "SOCKS 202.79.26.242:1080",
        "SOCKS 120.133.82.62:44134",
        "SOCKS 130.61.203.78:443",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 102.69.146.59:7080",
        "SOCKS 185.221.153.22:8443",
        "SOCKS 112.105.12.235:1111",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 49.82.173.39:8989",
        "SOCKS 47.252.47.39:1080",
        "SOCKS 141.95.112.221:9150",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}