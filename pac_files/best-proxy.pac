function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.222.132:3128",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 162.251.108.145:3128",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 188.166.252.135:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}