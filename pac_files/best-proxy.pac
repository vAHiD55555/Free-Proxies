function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.4.202.170:999",
        "SOCKS 185.130.226.55:1080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 200.119.141.114:999",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 160.25.8.131:11011",
        "SOCKS 78.13.74.125:8422",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 129.226.207.13:20201",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 114.80.36.171:3081",
        "SOCKS 177.234.217.91:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}