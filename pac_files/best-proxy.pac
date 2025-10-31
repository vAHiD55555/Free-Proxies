function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.126.23.24:2846",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 13.59.113.45:31280",
        "SOCKS 103.36.11.18:8199",
        "SOCKS 72.10.160.93:26517",
        "SOCKS 222.127.77.167:8085",
        "SOCKS 103.242.105.65:7200",
        "SOCKS 212.96.201.54:1080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 193.95.53.131:8077",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 37.221.193.221:11193",
        "SOCKS 8.243.68.10:8080",
        "SOCKS 83.169.255.92:1080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 8.219.169.191:1011",
        "SOCKS 178.128.167.129:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}