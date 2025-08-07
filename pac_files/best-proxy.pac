function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.224.8.116:6667",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 173.209.63.68:8037",
        "SOCKS 38.7.131.190:999",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 176.9.164.117:60011",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 103.155.199.106:3128",
        "SOCKS 91.241.241.5:3128",
        "SOCKS 47.76.144.139:1081",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 27.71.130.147:16000",
        "SOCKS 114.80.38.120:3081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}