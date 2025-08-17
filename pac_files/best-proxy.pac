function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.185.94.76:4145",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 92.119.126.229:8118",
        "SOCKS 51.159.159.73:80",
        "SOCKS 212.110.188.219:34408",
        "SOCKS 213.87.103.76:3128",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 185.59.100.55:1080",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 27.79.227.60:16000",
        "SOCKS 89.19.175.122:8008",
        "SOCKS 117.74.65.207:443",
        "SOCKS 171.234.184.227:1001",
        "SOCKS 89.117.145.245:3128",
        "SOCKS 27.79.184.207:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}