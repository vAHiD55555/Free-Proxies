function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.151.88.220:6618",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 202.96.165.47:7890",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 159.8.114.37:80",
        "SOCKS 169.57.157.148:80",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 39.105.27.30:3128",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 119.18.144.12:8585",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 213.97.158.42:3128",
        "SOCKS 62.60.131.180:6302",
        "SOCKS 43.224.116.22:1120",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}