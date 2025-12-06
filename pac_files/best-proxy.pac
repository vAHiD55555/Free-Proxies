function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.133.214:16379",
        "SOCKS 138.199.25.13:3905",
        "SOCKS 120.77.203.0:443",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 8.218.227.50:1011",
        "SOCKS 83.169.255.92:1080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 72.10.160.174:10301",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 45.144.234.129:53764",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 193.233.254.10:1080",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 95.216.17.79:3888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}