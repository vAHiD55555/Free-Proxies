function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.247.23.28:9223",
        "SOCKS 45.124.15.90:8080",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 4.206.212.39:3128",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 72.10.160.93:30557",
        "SOCKS 47.79.95.169:1122",
        "SOCKS 185.105.230.45:3128",
        "SOCKS 47.239.10.156:1100",
        "SOCKS 177.234.194.31:999",
        "SOCKS 202.136.88.210:11011",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 185.203.238.120:3128",
        "SOCKS 1.10.141.115:8080",
        "SOCKS 188.132.150.198:8080",
        "SOCKS 43.208.129.50:20201",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 18.143.167.190:9947",
        "SOCKS 161.35.70.249:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}