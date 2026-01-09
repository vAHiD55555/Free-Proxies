function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.205.190.164:8080",
        "SOCKS 36.255.98.180:7850",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 72.10.160.91:9959",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 168.253.92.93:10808",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 67.43.236.20:17133",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 1.180.49.222:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}