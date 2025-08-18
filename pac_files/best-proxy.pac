function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 41.65.160.173:1976",
        "SOCKS 185.93.89.144:4118",
        "SOCKS 117.161.170.163:9082",
        "SOCKS 115.72.3.228:10001",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 51.158.113.139:16379",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 185.93.89.144:4157",
        "SOCKS 185.93.89.145:5337",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 143.107.205.72:80",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 103.82.36.237:8888",
        "SOCKS 72.10.164.178:28247",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}