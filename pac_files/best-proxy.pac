function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.247.23.76:8081",
        "SOCKS 8.210.17.35:8002",
        "SOCKS 103.9.185.33:1080",
        "SOCKS 103.75.118.84:1080",
        "SOCKS 178.104.242.12:9050",
        "SOCKS 212.129.243.68:1143",
        "SOCKS 64.188.64.135:1080",
        "SOCKS 91.107.254.246:9097",
        "SOCKS 85.172.55.85:1080",
        "SOCKS 45.133.16.88:1080",
        "SOCKS 216.106.179.216:49415",
        "SOCKS 203.189.150.44:1080",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 151.243.169.161:9050",
        "SOCKS 45.77.37.39:2005",
        "SOCKS 43.128.23.68:1080",
        "SOCKS 152.69.167.87:1080",
        "SOCKS 34.229.113.62:1080",
        "SOCKS 163.61.70.4:9000",
        "SOCKS 15.204.235.27:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}