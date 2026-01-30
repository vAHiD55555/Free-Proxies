function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.165:12053",
        "SOCKS 47.239.176.7:1111",
        "SOCKS 62.60.131.203:4024",
        "SOCKS 62.60.131.204:4179",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 36.255.98.152:8768",
        "SOCKS 62.60.131.204:6040",
        "SOCKS 62.60.131.203:5131",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 103.245.96.165:3214",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 62.60.131.253:4224",
        "SOCKS 62.60.131.180:11378",
        "SOCKS 125.209.110.83:39617",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 88.99.69.103:5022",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 62.60.131.203:4060",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}