function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.128.41.253:28080",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 8.220.140.243:8080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 120.77.203.0:443",
        "SOCKS 110.235.255.191:1080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 200.59.191.61:999",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 203.196.8.6:3128",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 16.78.41.33:51552",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 161.35.31.237:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}