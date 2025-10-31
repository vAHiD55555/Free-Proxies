function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.182.233.70:7302",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 42.96.16.158:1311",
        "SOCKS 117.74.65.207:443",
        "SOCKS 217.160.149.74:7777",
        "SOCKS 221.1.104.177:7302",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 67.43.236.21:11055",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 157.180.121.252:28737",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 24.37.120.42:1080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 115.72.15.25:10029",
        "SOCKS 187.49.191.13:999",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 117.74.65.207:80",
        "SOCKS 222.129.36.157:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}