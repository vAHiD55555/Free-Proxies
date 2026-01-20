function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.162.180:18193",
        "SOCKS 37.120.162.180:11806",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 212.23.69.121:1080",
        "SOCKS 159.8.114.37:80",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 36.255.98.184:5163",
        "SOCKS 37.120.162.180:26025",
        "SOCKS 124.248.164.156:1080",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 37.120.162.180:28429",
        "SOCKS 203.3.112.2:6666",
        "SOCKS 37.120.162.180:55115",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 186.227.149.43:80",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 37.120.162.180:29933",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}