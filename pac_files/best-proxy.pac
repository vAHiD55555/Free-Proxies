function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.42.9.57:7201",
        "SOCKS 43.100.61.231:1111",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 27.71.132.134:16000",
        "SOCKS 58.22.60.174:1080",
        "SOCKS 47.83.133.167:1111",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 5.190.36.2:3128",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 152.53.194.55:21609",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}