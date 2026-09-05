function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 132.226.7.23:30277",
        "SOCKS 174.138.162.38:31090",
        "SOCKS 143.246.197.187:1082",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 45.194.41.70:8080",
        "SOCKS 31.76.31.241:1080",
        "SOCKS 45.74.31.30:4408",
        "SOCKS 172.86.88.139:1080",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 5.129.213.185:1080",
        "SOCKS 143.198.93.65:1080",
        "SOCKS 45.74.31.30:4137",
        "SOCKS 165.22.63.133:1080",
        "SOCKS 111.119.162.248:10976",
        "SOCKS 194.163.174.78:1081",
        "SOCKS 203.189.135.140:1080",
        "SOCKS 172.237.165.228:3128",
        "SOCKS 45.74.31.30:4084",
        "SOCKS 103.118.85.144:1080",
        "SOCKS 46.146.210.123:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}