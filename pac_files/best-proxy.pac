function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.210.22.17:3128",
        "SOCKS 52.188.28.218:3128",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 185.86.5.162:8975",
        "SOCKS 104.238.228.201:3128",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 200.174.198.158:8888",
        "SOCKS 14.234.141.1:20499",
        "SOCKS 159.100.20.206:27866",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 119.18.148.113:63636",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 41.223.119.156:3128",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 176.65.132.67:3128",
        "SOCKS 195.74.86.205:80",
        "SOCKS 37.187.92.9:1026",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}