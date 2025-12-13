function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.128.33.60:53405",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 146.235.212.142:1080",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 109.120.155.9:1080",
        "SOCKS 52.202.30.36:80",
        "SOCKS 113.11.64.145:43969",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 213.250.198.146:7777",
        "SOCKS 61.160.66.130:5555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}