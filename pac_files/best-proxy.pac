function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.72.221.184:3128",
        "SOCKS 159.65.230.91:20888",
        "SOCKS 166.249.54.61:7234",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 159.65.230.91:20532",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 159.65.230.91:20033",
        "SOCKS 45.140.147.82:1081",
        "SOCKS 159.65.230.91:20818",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 159.65.230.91:20573",
        "SOCKS 159.65.230.91:20819",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}