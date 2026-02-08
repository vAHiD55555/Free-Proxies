function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.158.8.123:3128",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 132.145.125.61:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 89.232.99.70:3128",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 181.204.39.202:26312",
        "SOCKS 160.25.8.148:11011",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 41.251.47.46:30023",
        "SOCKS 85.133.227.182:80",
        "SOCKS 143.110.217.153:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}