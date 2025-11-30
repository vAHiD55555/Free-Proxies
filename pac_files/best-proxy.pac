function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.138.62.182:43715",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 152.53.36.101:30811",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 72.10.160.91:9537",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 185.28.119.222:443",
        "SOCKS 152.53.36.101:27253",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 152.53.36.101:30006",
        "SOCKS 157.180.121.252:40003",
        "SOCKS 138.255.14.20:8080",
        "SOCKS 8.220.204.92:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}