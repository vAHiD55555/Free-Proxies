function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.21.153.16:3128",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 85.208.108.43:2094",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 185.118.51.133:3128",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 92.118.230.75:1081",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 103.28.121.58:80",
        "SOCKS 178.253.22.108:65431",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 81.12.119.171:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}