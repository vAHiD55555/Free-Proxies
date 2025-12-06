function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.105.107:16379",
        "SOCKS 179.60.53.26:999",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 38.54.9.151:999",
        "SOCKS 47.86.42.72:1100",
        "SOCKS 41.33.245.139:1981",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 67.43.228.254:22945",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 13.229.107.106:80",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 143.208.57.162:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}