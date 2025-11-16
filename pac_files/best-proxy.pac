function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.121.48.221:38711",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 172.94.36.219:80",
        "SOCKS 31.128.41.253:28080",
        "SOCKS 49.49.95.49:8081",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 40.192.27.104:16825",
        "SOCKS 89.58.45.94:25085",
        "SOCKS 177.39.72.73:8080",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 183.232.157.102:1100",
        "SOCKS 218.78.65.202:6688",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}