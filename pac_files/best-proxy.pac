function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.65.166.126:8118",
        "SOCKS 46.161.194.93:8085",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 45.168.244.16:8080",
        "SOCKS 124.248.168.90:1080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 157.173.201.10:1080",
        "SOCKS 41.65.160.173:1977",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 128.140.76.145:40407",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 171.249.163.170:1452",
        "SOCKS 107.173.37.104:22222",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}