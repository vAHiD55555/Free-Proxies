function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.81.194.120:8080",
        "SOCKS 185.93.89.180:4083",
        "SOCKS 45.167.125.193:999",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 152.53.171.242:57775",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 103.155.199.104:8080",
        "SOCKS 47.239.131.9:1100",
        "SOCKS 47.237.172.201:1011",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 185.93.89.172:8781",
        "SOCKS 185.93.89.146:4145",
        "SOCKS 178.33.77.209:10880",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 103.16.62.138:10888",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 195.234.68.34:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}