function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.239.86.248:3128",
        "SOCKS 89.110.80.195:10149",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 80.208.227.131:8080",
        "SOCKS 45.80.228.97:8080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 54.221.172.63:80",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 31.211.130.237:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}