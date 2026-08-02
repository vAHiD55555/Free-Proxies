function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 82.71.110.129:8888",
        "SOCKS 103.151.75.21:2025",
        "SOCKS 194.163.174.78:1089",
        "SOCKS 43.153.84.220:9050",
        "SOCKS 46.8.229.31:8080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 213.230.121.41:1080",
        "SOCKS 119.28.13.138:1080",
        "SOCKS 193.42.112.202:1080",
        "SOCKS 43.161.253.113:1080",
        "SOCKS 103.125.17.106:8080",
        "SOCKS 159.65.166.126:8118",
        "SOCKS 47.82.84.201:1011",
        "SOCKS 8.213.128.6:9091",
        "SOCKS 176.65.140.216:1085",
        "SOCKS 87.251.77.60:1080",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 64.225.42.129:3005",
        "SOCKS 102.90.0.146:8080",
        "SOCKS 149.104.4.88:10809",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}