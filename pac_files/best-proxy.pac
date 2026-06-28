function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.191.218.163:69",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 157.230.62.174:1080",
        "SOCKS 8.212.165.164:5000",
        "SOCKS 91.107.182.124:82",
        "SOCKS 184.95.220.42:1080",
        "SOCKS 47.82.77.82:80",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 188.166.249.234:4000",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 192.9.241.51:26568",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 188.166.249.234:3128",
        "SOCKS 159.203.133.128:9057",
        "SOCKS 120.77.203.0:443",
        "SOCKS 165.227.211.170:9066",
        "SOCKS 5.75.168.247:8047",
        "SOCKS 188.93.140.146:1080",
        "SOCKS 23.26.125.56:40000",
        "SOCKS 43.139.29.27:1100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}