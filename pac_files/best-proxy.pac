function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.129.39.95:3128",
        "SOCKS 38.194.253.30:999",
        "SOCKS 82.200.235.134:19170",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 146.235.19.84:10846",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 31.172.67.250:3128",
        "SOCKS 146.235.19.84:10852",
        "SOCKS 62.60.131.191:5052",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 180.103.250.177:1080",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 157.15.80.43:7777",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 155.212.170.93:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}