function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.171:9915",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 103.82.134.199:8888",
        "SOCKS 200.174.198.86:8888",
        "SOCKS 78.13.104.52:1047",
        "SOCKS 27.79.222.9:16000",
        "SOCKS 27.79.240.48:16000",
        "SOCKS 124.6.51.226:8099",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 27.79.220.146:16000",
        "SOCKS 154.236.177.102:1977",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 15.152.35.198:3129",
        "SOCKS 8.209.249.89:3128",
        "SOCKS 152.53.194.46:8065",
        "SOCKS 207.254.38.169:8888",
        "SOCKS 27.79.128.211:16000",
        "SOCKS 35.78.95.228:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}