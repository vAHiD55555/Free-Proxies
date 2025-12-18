function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 102.219.231.22:8080",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 88.215.162.59:1080",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 41.65.160.173:1977",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 31.145.149.75:9090",
        "SOCKS 203.189.137.122:1080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 194.87.77.22:80",
        "SOCKS 103.109.57.42:3629",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}