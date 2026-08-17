function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 83.147.216.208:1080",
        "SOCKS 140.82.35.234:44444",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 34.69.61.247:80",
        "SOCKS 194.163.174.78:1082",
        "SOCKS 118.145.141.251:44017",
        "SOCKS 8.220.141.8:8045",
        "SOCKS 176.192.41.172:4444",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 104.194.8.103:40001",
        "SOCKS 45.77.37.39:2021",
        "SOCKS 176.99.134.183:8090",
        "SOCKS 188.132.150.47:8080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 93.123.118.15:1080",
        "SOCKS 163.61.112.250:8080",
        "SOCKS 194.190.169.197:3701",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 43.135.164.115:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}