function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.105.107:16379",
        "SOCKS 62.60.131.188:4048",
        "SOCKS 103.127.133.131:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 64.4.160.17:80",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 91.84.113.225:54101",
        "SOCKS 141.0.12.41:80",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 36.255.98.175:5314",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 188.127.225.130:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}