function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 15.160.151.84:27147",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 152.53.36.101:13991",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 179.96.28.58:80",
        "SOCKS 88.216.98.225:48852",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 125.141.133.98:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}