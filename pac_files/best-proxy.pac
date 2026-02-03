function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 172.236.161.47:3128",
        "SOCKS 8.212.153.179:8080",
        "SOCKS 72.10.160.92:16423",
        "SOCKS 36.255.98.179:4076",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 36.255.98.176:4040",
        "SOCKS 194.246.82.89:13447",
        "SOCKS 152.53.171.242:12468",
        "SOCKS 8.217.3.240:8388",
        "SOCKS 62.60.131.180:4317",
        "SOCKS 152.53.171.242:20635",
        "SOCKS 195.133.11.246:1080",
        "SOCKS 62.133.62.12:1082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}