function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.108.59.143:8080",
        "SOCKS 72.10.160.90:12297",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 147.75.34.105:443",
        "SOCKS 8.222.234.245:1145",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 193.181.35.106:8118",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 103.81.175.218:28022",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 47.242.6.193:1011",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 104.206.98.154:3128",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 45.89.55.177:60006",
        "SOCKS 205.185.116.159:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}