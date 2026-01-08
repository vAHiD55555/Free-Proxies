function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.130.151.230:7302",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 37.237.225.218:8081",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 51.16.209.246:8080",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 72.10.160.173:13349",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 115.127.178.42:2589",
        "SOCKS 103.28.121.58:80",
        "SOCKS 114.67.227.38:1080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 182.160.117.141:50000",
        "SOCKS 4.216.195.194:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}