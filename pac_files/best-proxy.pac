function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.172:17385",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 160.19.16.86:1080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 159.223.149.191:20433",
        "SOCKS 222.59.173.105:44207",
        "SOCKS 115.127.181.122:2026",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 192.252.214.17:4145",
        "SOCKS 67.43.236.20:16325",
        "SOCKS 72.10.160.173:8253",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 45.144.234.129:53764",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 118.70.151.55:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}