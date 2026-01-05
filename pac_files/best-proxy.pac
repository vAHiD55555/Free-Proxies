function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.242.175.241:8899",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 46.0.205.4:1080",
        "SOCKS 141.98.188.201:2080",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 45.88.0.116:3128",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 68.71.243.14:4145",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 8.212.151.166:1080",
        "SOCKS 193.233.254.9:1080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 163.5.128.150:14270",
        "SOCKS 167.99.101.220:8080",
        "SOCKS 179.96.28.58:80",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 100.27.183.62:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}