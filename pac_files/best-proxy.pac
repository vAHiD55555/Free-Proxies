function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.240.207:16379",
        "SOCKS 115.127.182.90:2026",
        "SOCKS 82.26.74.193:9004",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 128.140.76.145:14226",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 198.23.189.151:8118",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 35.173.76.39:8080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 103.82.23.118:6230",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 103.86.131.62:80",
        "SOCKS 123.253.108.69:8999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}