function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.59.112.197:80",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 185.213.169.147:1080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 90.68.150.113:4321",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 195.86.215.2:3128",
        "SOCKS 107.152.45.72:8888",
        "SOCKS 159.13.44.239:8080",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 24.37.120.42:1080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 181.214.39.51:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}