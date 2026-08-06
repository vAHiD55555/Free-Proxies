function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.220.81.59:9050",
        "SOCKS 160.22.200.60:69",
        "SOCKS 91.239.211.83:8443",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 103.206.68.241:1080",
        "SOCKS 147.45.72.31:45700",
        "SOCKS 80.90.188.187:24530",
        "SOCKS 103.239.52.100:1080",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 147.45.221.111:1082",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 117.5.13.104:1087",
        "SOCKS 116.97.240.124:1543",
        "SOCKS 13.140.164.179:3523",
        "SOCKS 118.69.134.153:20000",
        "SOCKS 202.62.52.20:1080",
        "SOCKS 103.191.218.119:69",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 91.107.173.3:9080",
        "SOCKS 103.142.255.33:69",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}