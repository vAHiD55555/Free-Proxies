function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.70.79.3:8080",
        "SOCKS 148.178.125.68:8888",
        "SOCKS 8.218.39.40:10800",
        "SOCKS 139.59.24.173:1080",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 185.93.89.183:7779",
        "SOCKS 185.93.89.146:8561",
        "SOCKS 72.10.160.92:12137",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 185.93.89.158:19201",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 13.61.18.44:9032",
        "SOCKS 20.27.15.111:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}