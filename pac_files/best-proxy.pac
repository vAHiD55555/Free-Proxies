function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.39.105.157:8080",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 67.43.228.254:28187",
        "SOCKS 27.74.215.131:30245",
        "SOCKS 47.243.92.199:3128",
        "SOCKS 195.74.86.205:80",
        "SOCKS 211.143.79.108:3128",
        "SOCKS 72.10.160.173:24063",
        "SOCKS 18.143.165.238:9090",
        "SOCKS 43.134.177.187:20201",
        "SOCKS 103.250.68.94:2626",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 185.105.230.45:3128",
        "SOCKS 113.160.37.152:53281",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 41.65.160.172:1976",
        "SOCKS 128.199.202.122:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}