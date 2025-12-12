function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.144.234.129:53764",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 35.173.76.39:8080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 162.251.108.145:3128",
        "SOCKS 47.239.210.106:33333",
        "SOCKS 157.66.81.111:3128",
        "SOCKS 67.43.236.20:16325",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 83.169.255.92:1080",
        "SOCKS 195.158.8.123:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}