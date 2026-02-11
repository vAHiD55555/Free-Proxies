function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.33.248.45:1080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 123.54.197.20:22060",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 72.10.160.173:10941",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 123.54.197.19:21267",
        "SOCKS 123.54.197.51:20113",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 123.54.197.51:23243",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}