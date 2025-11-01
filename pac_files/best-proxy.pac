function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 161.35.31.237:1080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 72.10.160.173:1157",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 152.53.36.101:20399",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 157.175.42.134:3902",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 18.143.167.190:4097",
        "SOCKS 8.211.49.86:100",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 144.91.95.238:58237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}