function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 14.225.240.23:8562",
        "SOCKS 51.159.159.73:80",
        "SOCKS 49.254.146.127:28919",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 40.192.110.77:51773",
        "SOCKS 62.72.43.5:8118",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 49.156.44.115:8080",
        "SOCKS 173.209.63.70:8040",
        "SOCKS 213.176.66.76:8080",
        "SOCKS 149.129.226.9:8080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 60.13.42.157:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}