function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.70.67.11:1080",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 5.161.50.82:8118",
        "SOCKS 185.49.110.155:1080",
        "SOCKS 212.129.243.68:1143",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 8.213.195.191:3000",
        "SOCKS 47.238.236.151:5555",
        "SOCKS 82.193.116.160:21003",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 128.127.145.110:1080",
        "SOCKS 213.27.29.153:51000",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 161.35.90.93:1082",
        "SOCKS 128.199.104.190:41354",
        "SOCKS 8.213.195.191:8095",
        "SOCKS 89.19.214.171:1080",
        "SOCKS 47.245.104.45:1100",
        "SOCKS 203.25.208.163:1515",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}