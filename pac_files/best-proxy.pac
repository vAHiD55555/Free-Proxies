function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.168.53:44887",
        "SOCKS 116.96.111.204:5101",
        "SOCKS 47.238.60.156:3129",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 203.74.125.18:8888",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 103.122.64.201:8080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 91.208.197.21:8080",
        "SOCKS 185.208.102.157:8080",
        "SOCKS 95.50.160.250:80",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 103.153.62.155:8080",
        "SOCKS 103.82.246.19:6080",
        "SOCKS 145.40.96.156:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}