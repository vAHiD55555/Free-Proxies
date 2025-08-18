function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.250:7015",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 159.69.57.20:8880",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 8.209.249.89:3128",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 49.156.44.115:8080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 40.71.46.210:8214",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 27.79.132.13:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}