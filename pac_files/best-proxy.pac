function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.240.207:16379",
        "SOCKS 159.65.230.91:20540",
        "SOCKS 103.124.157.11:50161",
        "SOCKS 159.8.114.37:80",
        "SOCKS 120.77.203.0:443",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 117.1.48.242:20052",
        "SOCKS 91.217.76.97:1080",
        "SOCKS 202.152.44.18:8081",
        "SOCKS 178.170.43.106:8081",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 168.235.110.63:3128",
        "SOCKS 193.239.86.249:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}