function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 24.249.199.4:4145",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 171.250.178.142:4005",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 223.135.156.183:8080",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 89.117.145.245:3128",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 85.133.240.75:8080",
        "SOCKS 27.79.199.127:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}