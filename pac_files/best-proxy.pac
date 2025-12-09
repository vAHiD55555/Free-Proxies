function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 161.35.31.237:1080",
        "SOCKS 18.141.177.23:80",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 20.78.118.91:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}