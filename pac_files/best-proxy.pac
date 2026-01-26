function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 179.96.28.58:80",
        "SOCKS 103.153.39.35:8083",
        "SOCKS 88.99.30.237:5062",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 142.132.139.242:5141",
        "SOCKS 36.255.98.153:7019",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 91.107.160.34:5050",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 62.60.131.179:4246",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 98.190.102.62:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}