function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.94:29225",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 190.97.236.133:999",
        "SOCKS 90.156.194.71:8080",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 171.231.175.71:7010",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 64.69.43.232:1080",
        "SOCKS 116.96.85.215:16000",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 222.59.173.105:44124",
        "SOCKS 42.119.167.47:16000",
        "SOCKS 45.89.28.226:12915",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}