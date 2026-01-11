function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.93.8.34:11000",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 173.212.197.244:10801",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 45.204.208.22:60002",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 62.60.131.188:4392",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 196.204.83.232:1976",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 36.255.98.163:8004",
        "SOCKS 47.238.128.246:6379",
        "SOCKS 47.83.211.225:1011",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 103.86.131.62:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}