function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.113.155.120:41154",
        "SOCKS 58.33.109.114:2021",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 77.110.124.36:3128",
        "SOCKS 51.79.99.237:4502",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 115.231.181.40:8128",
        "SOCKS 190.61.106.97:8080",
        "SOCKS 122.2.79.75:8082",
        "SOCKS 39.105.27.30:3128",
        "SOCKS 27.147.140.129:58080",
        "SOCKS 42.96.16.158:1311",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 84.241.30.214:8080",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 72.10.160.91:18749",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}