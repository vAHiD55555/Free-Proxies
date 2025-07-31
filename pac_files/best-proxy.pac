function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 177.10.145.24:8080",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 212.110.188.220:34409",
        "SOCKS 1.55.53.239:16000",
        "SOCKS 212.110.188.211:34409",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 212.124.22.245:1080",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 121.132.61.211:3128",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 52.189.122.251:3128",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 37.200.66.166:9051",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}