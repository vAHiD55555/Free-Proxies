function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:40033",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 103.172.196.221:8080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 185.236.182.114:999",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 89.169.36.109:1080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 202.58.77.77:1111",
        "SOCKS 157.100.52.170:999",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 104.37.175.200:22292",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}