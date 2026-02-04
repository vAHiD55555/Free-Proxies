function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 163.172.161.35:16379",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 138.199.25.13:3908",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 174.138.62.182:43715",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}