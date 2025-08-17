function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.165.233.121:9151",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 135.181.203.208:80",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 40.192.27.104:8080",
        "SOCKS 115.72.160.37:10001",
        "SOCKS 92.119.126.229:8118",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 116.98.162.130:10001",
        "SOCKS 47.237.92.86:8080",
        "SOCKS 94.247.129.244:3128",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 213.87.103.76:3128",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 77.110.114.19:8118",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}