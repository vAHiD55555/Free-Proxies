function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.126.51:5556",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 103.124.227.89:12445",
        "SOCKS 103.156.74.154:1111",
        "SOCKS 65.109.52.109:1080",
        "SOCKS 185.93.89.181:8168",
        "SOCKS 160.25.8.148:11011",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 202.65.127.194:1080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 103.174.238.67:8080",
        "SOCKS 117.74.65.207:443",
        "SOCKS 72.10.160.174:8097",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 72.10.160.92:12137",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}