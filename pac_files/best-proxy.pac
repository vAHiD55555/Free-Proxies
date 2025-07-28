function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.249.174.201:10001",
        "SOCKS 27.79.171.13:16000",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 27.79.169.85:16000",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 116.108.6.61:4001",
        "SOCKS 27.71.143.83:16000",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 27.79.152.191:16000",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 40.71.46.210:8214",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 195.158.8.123:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}