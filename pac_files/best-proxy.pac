function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 192.163.200.82:17071",
        "SOCKS 103.151.75.21:2025",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 88.99.82.67:443",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 38.127.172.94:37234",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 110.235.247.105:1080",
        "SOCKS 166.88.225.0:9151",
        "SOCKS 106.52.215.138:7890",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 8.212.151.166:111",
        "SOCKS 176.114.199.202:1080",
        "SOCKS 152.32.230.12:7890",
        "SOCKS 103.189.218.158:1080",
        "SOCKS 165.22.110.253:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}