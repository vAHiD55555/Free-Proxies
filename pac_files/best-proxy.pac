function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.154.43.198:39522",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 34.32.154.33:3128",
        "SOCKS 85.198.84.77:10808",
        "SOCKS 206.123.156.228:8081",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 121.128.121.34:3128",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 159.65.230.91:20547",
        "SOCKS 43.160.195.20:20005",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 95.216.95.185:8888",
        "SOCKS 138.2.72.115:1090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}