function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 168.138.222.163:1080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 45.87.43.72:54321",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 45.88.0.114:3128",
        "SOCKS 185.61.246.57:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 209.62.196.68:8080",
        "SOCKS 146.235.19.84:10863",
        "SOCKS 212.23.69.121:1080",
        "SOCKS 146.235.19.84:10880",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 8.217.155.235:1011",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 103.114.53.2:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}