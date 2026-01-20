function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.162.180:34449",
        "SOCKS 37.120.162.180:10087",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 67.201.39.14:4145",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 93.184.5.121:1080",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 37.120.162.180:54443",
        "SOCKS 37.120.162.180:16345",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 119.81.71.27:80",
        "SOCKS 31.173.247.205:8081",
        "SOCKS 37.120.162.180:43145",
        "SOCKS 37.120.162.180:26025",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 203.3.112.2:6666",
        "SOCKS 162.144.74.156:3620",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}