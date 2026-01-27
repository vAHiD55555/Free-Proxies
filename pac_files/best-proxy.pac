function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.80.1:9090",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 36.255.98.168:6956",
        "SOCKS 94.230.127.180:1080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 62.60.131.205:5441",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 35.180.188.216:80",
        "SOCKS 36.255.98.168:6713",
        "SOCKS 88.99.30.237:5062",
        "SOCKS 36.255.98.177:9494",
        "SOCKS 62.60.131.205:4145",
        "SOCKS 62.60.131.203:4189",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 62.60.131.205:4983",
        "SOCKS 103.28.121.58:80",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 64.181.240.152:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}