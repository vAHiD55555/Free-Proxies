function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.175.152.104:261",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 45.22.209.157:8888",
        "SOCKS 47.79.40.185:12462",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 67.43.236.20:6691",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 84.17.51.235:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}