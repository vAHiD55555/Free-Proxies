function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.189.218.158:1080",
        "SOCKS 80.75.213.22:3128",
        "SOCKS 27.79.176.103:16000",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 147.75.34.105:443",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 160.119.228.146:12354",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 65.38.213.154:8881",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 3.107.252.199:8099",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 37.27.142.59:3128",
        "SOCKS 135.181.203.208:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}