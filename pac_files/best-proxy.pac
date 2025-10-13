function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.32.173:57114",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 198.187.28.126:8080",
        "SOCKS 45.14.224.247:80",
        "SOCKS 185.130.226.55:1080",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 123.128.12.93:9050",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 47.79.94.72:1122",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 221.202.27.194:10808",
        "SOCKS 47.115.42.157:8044",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}