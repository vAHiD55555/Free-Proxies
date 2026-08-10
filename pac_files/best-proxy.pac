function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.182.96.178:10087",
        "SOCKS 178.250.156.112:443",
        "SOCKS 151.243.153.157:8118",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 103.134.220.49:1080",
        "SOCKS 81.177.165.209:10808",
        "SOCKS 47.85.195.135:1080",
        "SOCKS 161.35.90.93:1081",
        "SOCKS 103.163.244.106:1080",
        "SOCKS 122.117.35.224:1080",
        "SOCKS 43.133.13.187:8889",
        "SOCKS 202.62.52.20:1080",
        "SOCKS 8.213.215.187:8888",
        "SOCKS 23.27.141.23:3080",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 8.215.25.3:2080",
        "SOCKS 8.212.168.170:4145",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 221.176.85.232:1080",
        "SOCKS 158.220.101.43:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}