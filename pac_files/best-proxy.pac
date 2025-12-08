function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.215.46.91:20087",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 134.228.79.236:8080",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 82.26.74.193:9004",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 139.59.1.14:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}