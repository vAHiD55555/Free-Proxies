function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.210.76.178:8561",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 8.212.165.33:3333",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 8.218.131.174:1011",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 44.251.173.250:368",
        "SOCKS 129.146.226.84:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 45.77.156.171:9091",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}