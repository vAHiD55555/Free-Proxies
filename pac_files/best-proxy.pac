function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.148.23.202:9080",
        "SOCKS 123.54.197.18:23965",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 152.53.136.194:10000",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 123.54.197.16:23483",
        "SOCKS 123.54.197.20:23085",
        "SOCKS 31.129.147.102:1080",
        "SOCKS 45.88.0.113:3128",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 123.54.197.19:22417",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 160.20.55.235:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}