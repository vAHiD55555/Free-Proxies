function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.37.77:57114",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 157.180.121.252:17655",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 38.180.104.111:2025",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 89.58.45.94:32999",
        "SOCKS 152.53.171.242:12229",
        "SOCKS 147.185.221.19:14365",
        "SOCKS 89.58.45.94:18777",
        "SOCKS 135.181.203.208:80",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 89.58.45.94:35095",
        "SOCKS 38.180.108.206:2025",
        "SOCKS 103.189.63.149:53053",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 89.169.36.109:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 113.120.61.189:43644",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}