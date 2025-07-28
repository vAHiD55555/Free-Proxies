function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.64.122.99:7302",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 104.200.152.30:4145",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 66.78.40.66:8880",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 67.43.228.254:6535",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 51.158.70.223:16379",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 51.158.70.181:16379",
        "SOCKS 27.71.143.83:16000",
        "SOCKS 8.210.117.141:8888",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 67.43.236.19:3527",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}