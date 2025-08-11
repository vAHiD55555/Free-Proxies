function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.35.9:57114",
        "SOCKS 173.209.63.69:8111",
        "SOCKS 67.43.236.22:29979",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 51.20.192.194:3128",
        "SOCKS 115.77.35.33:1001",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 8.213.129.20:2020",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 91.84.99.28:80",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 5.188.183.253:8080",
        "SOCKS 40.71.46.210:8214",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}