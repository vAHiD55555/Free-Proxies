function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.166.132.124:3000",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 54.180.143.12:1267",
        "SOCKS 173.209.63.68:8047",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 173.209.63.69:8245",
        "SOCKS 103.190.120.98:30027",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 179.96.28.58:80",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 117.74.65.207:443",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 51.158.68.28:16379",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 117.68.147.8:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}