function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 114.80.32.8:3081",
        "SOCKS 89.58.45.94:37133",
        "SOCKS 202.62.84.210:53281",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 89.58.45.94:28193",
        "SOCKS 157.180.121.252:10353",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 72.10.160.92:30375",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 47.98.190.236:8002",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 155.94.163.202:1080",
        "SOCKS 3.107.252.199:45157",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 37.221.193.221:16015",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}