function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.210.79:16379",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 27.254.140.101:8080",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 145.241.249.192:8080",
        "SOCKS 98.91.70.112:8080",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 52.5.228.102:8080",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 72.10.160.174:10301",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 72.10.160.170:13701",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}