function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.178.99.43:7302",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 150.136.153.231:443",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 43.153.64.222:14465",
        "SOCKS 121.165.162.9:8884",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 201.217.28.203:88",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 172.111.146.153:443",
        "SOCKS 157.180.121.252:11021",
        "SOCKS 193.56.20.232:8085",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 188.93.213.242:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}