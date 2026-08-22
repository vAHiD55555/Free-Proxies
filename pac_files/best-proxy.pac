function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.163.174.78:1080",
        "SOCKS 8.215.112.240:7777",
        "SOCKS 15.237.108.20:54588",
        "SOCKS 109.164.35.23:8888",
        "SOCKS 118.145.141.251:44093",
        "SOCKS 45.74.31.42:6766",
        "SOCKS 195.46.183.181:1080",
        "SOCKS 182.163.96.66:1080",
        "SOCKS 45.74.31.42:9335",
        "SOCKS 45.74.31.42:7784",
        "SOCKS 118.145.141.251:44089",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 103.56.205.84:8080",
        "SOCKS 45.74.31.30:7777",
        "SOCKS 118.145.141.251:44118",
        "SOCKS 118.145.141.251:44245",
        "SOCKS 103.162.57.42:1080",
        "SOCKS 45.144.53.63:5000",
        "SOCKS 45.74.31.42:12364",
        "SOCKS 5.255.117.250:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}