function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.191.164.55:4890",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 47.83.8.7:18080",
        "SOCKS 13.229.107.106:80",
        "SOCKS 213.35.110.67:10907",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 152.53.171.242:11620",
        "SOCKS 203.189.153.168:1080",
        "SOCKS 123.54.197.19:20221",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 90.156.229.56:1234",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 211.171.114.154:3128",
        "SOCKS 13.229.47.109:80",
        "SOCKS 45.172.1.4:800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}