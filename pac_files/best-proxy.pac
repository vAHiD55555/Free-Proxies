function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.112:5566",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 120.77.203.0:443",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 138.199.25.13:3903",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 202.40.179.186:64564",
        "SOCKS 103.117.100.127:13082",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 45.144.234.129:53434",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}