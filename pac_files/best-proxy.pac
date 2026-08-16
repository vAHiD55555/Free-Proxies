function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.77.37.39:2022",
        "SOCKS 194.67.51.210:1080",
        "SOCKS 43.134.34.29:7890",
        "SOCKS 165.99.14.18:1111",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 8.219.97.248:80",
        "SOCKS 5.252.177.241:9050",
        "SOCKS 93.90.231.101:1080",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 8.215.15.163:8008",
        "SOCKS 47.242.191.174:1011",
        "SOCKS 171.253.95.24:1026",
        "SOCKS 47.251.87.199:4145",
        "SOCKS 45.95.233.88:1082",
        "SOCKS 45.79.203.254:48388",
        "SOCKS 129.150.47.213:9050",
        "SOCKS 203.189.135.140:1080",
        "SOCKS 43.252.237.169:1080",
        "SOCKS 45.86.229.39:11000",
        "SOCKS 144.124.232.204:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}