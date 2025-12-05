function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.205.190.164:8080",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 47.90.149.238:8081",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 103.48.69.33:83",
        "SOCKS 85.113.43.181:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 195.189.190.245:9090",
        "SOCKS 104.248.59.38:80",
        "SOCKS 44.193.200.192:3128",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 185.123.143.247:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}