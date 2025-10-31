function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.239.188.28:1024",
        "SOCKS 78.29.46.43:1080",
        "SOCKS 27.74.247.173:8080",
        "SOCKS 157.180.121.252:15303",
        "SOCKS 138.124.49.149:10808",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 170.84.147.156:8088",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 176.108.146.179:1080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 166.249.54.64:7234",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 213.230.121.73:3128",
        "SOCKS 8.218.36.48:1011",
        "SOCKS 203.25.208.163:1011",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}