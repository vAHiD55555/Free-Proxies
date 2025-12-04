function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.116.159:5556",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 104.248.59.38:80",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 119.81.189.194:80",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 115.127.180.34:6969",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 169.57.157.148:80",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 139.59.7.217:36590",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}