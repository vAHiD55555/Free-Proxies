function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.163.167.32:1080",
        "SOCKS 115.127.178.54:2589",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 193.233.254.9:1080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 54.90.159.174:22229",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 192.145.31.78:8080",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 159.8.114.37:80",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 207.254.71.62:8088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}