function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.106.226:1088",
        "SOCKS 159.65.230.91:20778",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 85.208.108.43:2094",
        "SOCKS 115.190.91.223:7897",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 103.28.121.58:80",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 43.99.243.123:58367",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 193.56.255.181:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}