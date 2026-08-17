function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.255.252:1080",
        "SOCKS 47.250.11.111:199",
        "SOCKS 92.118.234.124:1080",
        "SOCKS 27.131.14.9:1088",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 78.188.230.81:3310",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 116.96.32.160:1089",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 103.239.52.100:1080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 182.163.96.66:1080",
        "SOCKS 130.49.187.61:1082",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 141.148.158.143:1080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 176.99.134.183:8090",
        "SOCKS 47.250.11.111:55443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}