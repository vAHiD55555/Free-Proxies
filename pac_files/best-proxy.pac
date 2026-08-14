function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 216.106.179.216:49327",
        "SOCKS 116.96.32.160:1111",
        "SOCKS 91.90.121.44:9050",
        "SOCKS 66.59.197.61:3128",
        "SOCKS 154.203.132.81:1080",
        "SOCKS 110.49.66.210:8080",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 195.19.50.180:1080",
        "SOCKS 150.242.218.137:1080",
        "SOCKS 194.87.10.38:1234",
        "SOCKS 171.253.95.3:1089",
        "SOCKS 23.149.108.178:9999",
        "SOCKS 43.157.247.44:7000",
        "SOCKS 118.70.67.11:1080",
        "SOCKS 152.32.217.35:10808",
        "SOCKS 65.109.217.76:2223",
        "SOCKS 147.45.221.111:1082",
        "SOCKS 139.59.44.192:9050",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 109.172.7.42:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}