function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.198:5566",
        "SOCKS 200.59.186.176:999",
        "SOCKS 85.133.227.182:80",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 8.130.71.75:8119",
        "SOCKS 68.183.90.210:59166",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}