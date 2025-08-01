function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 42.118.1.52:16000",
        "SOCKS 85.206.93.105:8080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 4.197.174.204:3128",
        "SOCKS 186.180.20.34:8080",
        "SOCKS 116.103.133.168:1009",
        "SOCKS 1.54.76.119:16000",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 179.96.28.58:80",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 103.247.23.140:4317",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 201.182.251.179:999",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 77.110.114.19:8118",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}