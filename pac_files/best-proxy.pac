function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.197.129:3128",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 43.130.52.194:8118",
        "SOCKS 139.59.228.95:8118",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}