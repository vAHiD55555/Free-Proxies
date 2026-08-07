function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.18.73.60:5566",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 38.76.215.92:1080",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 160.20.39.23:8090",
        "SOCKS 152.89.104.11:1080",
        "SOCKS 103.161.104.96:1080",
        "SOCKS 46.17.43.219:7890",
        "SOCKS 31.25.236.95:1080",
        "SOCKS 161.35.90.93:1081",
        "SOCKS 144.124.232.204:1080",
        "SOCKS 158.94.208.76:9050",
        "SOCKS 175.27.250.85:44236",
        "SOCKS 104.154.186.48:80",
        "SOCKS 65.108.246.14:9050",
        "SOCKS 110.235.252.74:1080",
        "SOCKS 5.189.17.23:9050",
        "SOCKS 13.140.164.179:3527",
        "SOCKS 109.172.55.210:1082",
        "SOCKS 186.26.95.249:61445",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}