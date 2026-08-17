function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 3.129.27.9:17000",
        "SOCKS 94.198.54.232:1080",
        "SOCKS 193.26.122.186:9050",
        "SOCKS 152.32.217.35:10808",
        "SOCKS 8.221.139.222:8026",
        "SOCKS 47.251.74.38:80",
        "SOCKS 8.221.141.88:2101",
        "SOCKS 159.195.49.27:8888",
        "SOCKS 43.133.128.153:16012",
        "SOCKS 103.187.226.52:8082",
        "SOCKS 118.145.141.251:44108",
        "SOCKS 8.221.141.88:1723",
        "SOCKS 103.106.190.58:1080",
        "SOCKS 192.229.85.39:33142",
        "SOCKS 59.36.210.211:13552",
        "SOCKS 8.220.204.215:1081",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 160.250.54.8:9000",
        "SOCKS 38.175.197.50:5555",
        "SOCKS 45.76.13.121:49995",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}