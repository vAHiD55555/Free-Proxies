function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.225.116.115:1080",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 120.77.203.0:443",
        "SOCKS 43.160.219.238:1080",
        "SOCKS 173.249.5.133:1080",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 45.136.198.40:3128",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 206.123.156.210:39373",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 38.55.75.218:1080",
        "SOCKS 104.251.81.228:14270",
        "SOCKS 168.235.110.63:3128",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 206.123.156.202:30587",
        "SOCKS 217.76.245.80:999",
        "SOCKS 47.91.104.88:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}