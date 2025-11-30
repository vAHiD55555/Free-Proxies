function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:37737",
        "SOCKS 38.250.155.130:999",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 121.165.169.217:8050",
        "SOCKS 157.180.121.252:40003",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 54.37.72.89:80",
        "SOCKS 157.180.121.252:19629",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 89.39.83.204:80",
        "SOCKS 72.10.160.93:29055",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 152.53.36.101:47963",
        "SOCKS 65.108.203.36:28080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 194.26.135.215:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}