function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 161.97.119.1:8888",
        "SOCKS 110.49.66.210:8080",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 134.175.238.113:1080",
        "SOCKS 194.163.174.78:1087",
        "SOCKS 62.60.230.196:1080",
        "SOCKS 8.215.3.250:8118",
        "SOCKS 38.127.179.219:41923",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 160.250.54.7:9000",
        "SOCKS 185.209.29.226:1080",
        "SOCKS 194.87.10.38:1234",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 144.21.39.252:1080",
        "SOCKS 152.70.236.84:1080",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 118.69.134.153:20000",
        "SOCKS 164.52.216.68:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}