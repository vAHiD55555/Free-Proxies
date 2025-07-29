function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 39.99.34.28:8888",
        "SOCKS 47.252.11.233:443",
        "SOCKS 1.52.199.31:16000",
        "SOCKS 27.79.155.4:16000",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 212.110.188.222:34411",
        "SOCKS 89.117.145.245:3128",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 1.54.237.20:16000",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 42.118.74.104:16000",
        "SOCKS 77.238.103.98:8080",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 183.80.23.68:16000",
        "SOCKS 51.79.195.246:40000",
        "SOCKS 8.208.94.223:3128",
        "SOCKS 47.236.37.129:18081",
        "SOCKS 212.110.188.195:34411",
        "SOCKS 78.109.201.55:81",
        "SOCKS 65.108.203.36:28080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}