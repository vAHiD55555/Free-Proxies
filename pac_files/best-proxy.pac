function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.86.131.62:80",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 35.180.188.216:80",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 169.57.157.148:80",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 91.236.74.10:8080",
        "SOCKS 109.120.135.230:2030",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 41.65.160.172:1976",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 51.195.139.95:44648",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}