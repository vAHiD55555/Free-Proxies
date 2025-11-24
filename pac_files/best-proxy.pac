function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 15.160.151.84:27147",
        "SOCKS 157.180.121.252:58691",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 89.169.36.109:1080",
        "SOCKS 72.10.160.93:7741",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 138.199.25.13:3909",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 24.37.120.42:1080",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 188.191.164.55:4890",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 72.10.160.173:1157",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 46.10.208.106:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}