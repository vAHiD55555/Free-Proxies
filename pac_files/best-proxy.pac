function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.236.202.205:3128",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 197.218.16.16:3128",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 36.255.98.164:8724",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 187.190.127.212:8081",
        "SOCKS 177.70.77.201:20183",
        "SOCKS 8.130.90.177:3128",
        "SOCKS 61.49.87.3:80",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 37.120.162.180:42524",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 208.72.153.59:1080",
        "SOCKS 147.75.34.105:443",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 103.126.87.125:8090",
        "SOCKS 115.127.80.1:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}