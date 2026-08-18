function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.21.252.66:10811",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 146.235.231.249:1080",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 8.220.204.92:12000",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 160.22.200.60:69",
        "SOCKS 185.125.200.80:1090",
        "SOCKS 146.190.60.147:8003",
        "SOCKS 120.133.82.62:44050",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 81.0.49.104:18500",
        "SOCKS 202.62.62.113:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 118.145.141.251:44235",
        "SOCKS 111.50.119.10:18701",
        "SOCKS 120.133.82.62:44115",
        "SOCKS 196.204.83.229:1976",
        "SOCKS 213.171.15.153:1080",
        "SOCKS 185.194.217.97:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}