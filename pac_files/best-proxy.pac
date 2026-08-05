function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.135.105:1080",
        "SOCKS 43.242.227.10:9051",
        "SOCKS 103.9.185.33:1080",
        "SOCKS 217.12.209.4:1080",
        "SOCKS 47.250.11.111:8081",
        "SOCKS 31.56.32.59:10800",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 203.189.152.79:1080",
        "SOCKS 216.22.13.244:1083",
        "SOCKS 37.27.245.106:8118",
        "SOCKS 116.105.22.7:1080",
        "SOCKS 104.154.186.48:80",
        "SOCKS 47.75.116.41:10800",
        "SOCKS 77.163.47.213:3128",
        "SOCKS 45.74.178.43:9080",
        "SOCKS 107.149.143.169:7890",
        "SOCKS 160.250.54.5:9000",
        "SOCKS 47.251.74.38:80",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 134.175.238.113:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}