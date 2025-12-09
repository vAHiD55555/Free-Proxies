function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 217.172.122.14:8080",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 103.150.255.123:8585",
        "SOCKS 162.251.108.145:3128",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 65.108.203.36:28080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 195.175.31.222:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}