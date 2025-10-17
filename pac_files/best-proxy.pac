function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 112.86.116.24:1080",
        "SOCKS 113.160.37.152:53281",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 185.93.89.164:4134",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 8.219.172.7:1011",
        "SOCKS 119.18.149.9:5720",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 185.93.89.158:8002",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 89.58.45.94:13595",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 185.93.89.147:5101",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 72.10.160.173:24063",
        "SOCKS 103.249.19.13:10001",
        "SOCKS 185.93.89.180:14720",
        "SOCKS 91.206.14.184:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}