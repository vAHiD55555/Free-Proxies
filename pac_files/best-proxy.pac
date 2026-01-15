function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.49:5566",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 120.77.203.0:443",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 45.167.124.234:999",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 104.248.59.38:80",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 66.114.34.156:8111",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 222.129.37.77:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}