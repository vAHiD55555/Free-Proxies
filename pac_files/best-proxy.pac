function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 39.170.85.129:7302",
        "SOCKS 152.53.36.101:10055",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 5.189.187.118:3128",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 152.53.36.101:53983",
        "SOCKS 103.147.163.196:9966",
        "SOCKS 67.43.236.22:20051",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 185.93.89.188:4963",
        "SOCKS 185.93.89.157:9220",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 185.93.89.155:8199",
        "SOCKS 202.152.44.19:8081",
        "SOCKS 120.224.234.71:7300",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}