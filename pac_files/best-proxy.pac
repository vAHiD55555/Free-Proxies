function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.79.17.77:1100",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 103.184.56.240:8080",
        "SOCKS 185.93.89.144:4379",
        "SOCKS 82.200.235.134:19170",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 134.199.159.23:1080",
        "SOCKS 152.53.36.101:31560",
        "SOCKS 8.211.194.85:1081",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 185.93.89.144:4235",
        "SOCKS 77.105.137.42:8080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 202.58.77.194:8031",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}