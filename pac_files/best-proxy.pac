function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 199.247.18.115:9050",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 202.62.52.120:1080",
        "SOCKS 77.90.8.154:9116",
        "SOCKS 66.59.197.61:4000",
        "SOCKS 178.105.82.248:9150",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 110.235.247.206:1080",
        "SOCKS 128.0.26.27:1080",
        "SOCKS 72.205.0.93:4145",
        "SOCKS 111.119.162.248:10901",
        "SOCKS 188.127.224.164:2080",
        "SOCKS 45.77.37.39:2078",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 47.251.74.38:80",
        "SOCKS 103.82.20.76:8080",
        "SOCKS 111.119.162.248:10936",
        "SOCKS 194.87.35.217:40001",
        "SOCKS 9.154.224.113:8080",
        "SOCKS 144.124.227.88:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}