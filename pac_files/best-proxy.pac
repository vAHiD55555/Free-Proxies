function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.46.208.183:1080",
        "SOCKS 47.239.213.123:7080",
        "SOCKS 43.153.62.53:9050",
        "SOCKS 91.209.71.84:9106",
        "SOCKS 85.198.81.83:3128",
        "SOCKS 91.98.237.146:9050",
        "SOCKS 188.132.174.89:9080",
        "SOCKS 104.161.23.122:5002",
        "SOCKS 8.213.215.187:34567",
        "SOCKS 138.0.143.120:8080",
        "SOCKS 43.208.245.90:3129",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 216.106.179.216:49382",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 24.173.217.114:55443",
        "SOCKS 95.211.174.135:3128",
        "SOCKS 147.45.60.249:1081",
        "SOCKS 47.252.11.233:91",
        "SOCKS 178.250.156.112:443",
        "SOCKS 203.25.208.163:1145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}