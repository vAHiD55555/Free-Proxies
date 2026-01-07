function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.50.7.101:8000",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 36.255.98.180:22482",
        "SOCKS 159.8.114.37:80",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 112.198.179.39:8082",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 103.174.178.137:1020",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}