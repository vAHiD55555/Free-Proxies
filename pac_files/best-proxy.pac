function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 170.80.202.217:999",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 43.229.79.217:3128",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 47.91.120.190:9098",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 47.237.172.201:1011",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 103.76.109.201:8083",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 103.22.99.12:2020",
        "SOCKS 89.169.36.109:1080",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 69.164.194.19:3128",
        "SOCKS 200.37.252.122:8080",
        "SOCKS 103.174.178.131:1020",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}