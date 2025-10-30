function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.120.241:5556",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 201.230.121.126:999",
        "SOCKS 41.128.72.131:1976",
        "SOCKS 8.153.87.198:6666",
        "SOCKS 185.203.238.120:3128",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 207.254.28.68:2025",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 157.180.121.252:49547",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 46.10.229.243:7777",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}