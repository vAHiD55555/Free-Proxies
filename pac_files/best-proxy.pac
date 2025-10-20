function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.115.42.157:8044",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 103.133.110.243:20000",
        "SOCKS 160.19.16.86:1080",
        "SOCKS 103.72.89.33:8097",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 14.234.141.1:20499",
        "SOCKS 185.93.89.181:8090",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 185.93.89.182:4271",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 89.58.45.94:54321",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 160.20.146.24:8080",
        "SOCKS 157.175.43.137:9390",
        "SOCKS 23.251.62.210:10080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}