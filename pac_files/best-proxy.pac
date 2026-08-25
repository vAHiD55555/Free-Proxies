function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.21.252.66:10811",
        "SOCKS 203.189.153.170:1080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 130.255.94.39:5080",
        "SOCKS 80.93.62.239:1080",
        "SOCKS 118.145.141.251:44217",
        "SOCKS 45.74.31.30:4387",
        "SOCKS 43.164.136.189:1080",
        "SOCKS 156.245.246.51:7890",
        "SOCKS 49.13.22.249:10811",
        "SOCKS 195.19.51.21:1080",
        "SOCKS 103.178.86.185:8080",
        "SOCKS 160.250.54.7:9000",
        "SOCKS 118.145.141.251:44085",
        "SOCKS 87.120.196.132:35000",
        "SOCKS 45.74.31.30:4426",
        "SOCKS 46.17.43.219:7890",
        "SOCKS 103.157.200.126:3128",
        "SOCKS 110.235.240.223:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}