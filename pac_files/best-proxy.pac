function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 49.0.26.183:1080",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 184.181.178.33:4145",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 37.53.90.82:12542",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 141.11.1.77:1080",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 212.23.69.121:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 202.5.59.97:6969",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 43.224.10.43:6667",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}