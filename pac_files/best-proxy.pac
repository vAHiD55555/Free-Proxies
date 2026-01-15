function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.160:10088",
        "SOCKS 77.50.104.110:1080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 72.10.160.91:26909",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 43.163.86.219:20000",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 43.209.8.12:93",
        "SOCKS 170.239.205.74:8080",
        "SOCKS 175.24.2.65:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}