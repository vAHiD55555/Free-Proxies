function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.88.104.126:3344",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 8.220.149.222:80",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 144.31.0.166:3128",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 123.54.197.21:20305",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 85.121.244.176:50161",
        "SOCKS 72.10.160.173:10941",
        "SOCKS 123.54.197.24:23569",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 123.54.197.53:21515",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 193.239.86.247:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}