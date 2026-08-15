function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 172.207.72.222:1080",
        "SOCKS 95.85.233.144:18443",
        "SOCKS 47.82.112.38:1080",
        "SOCKS 171.253.95.64:1083",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 89.169.37.254:1080",
        "SOCKS 161.97.153.238:9050",
        "SOCKS 27.131.14.9:1088",
        "SOCKS 195.211.124.50:1080",
        "SOCKS 118.69.148.120:20000",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 122.51.108.168:7890",
        "SOCKS 112.105.12.235:1111",
        "SOCKS 103.243.82.38:8008",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 202.91.41.102:1080",
        "SOCKS 216.48.186.175:8080",
        "SOCKS 116.48.170.221:11000",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 66.59.197.63:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}