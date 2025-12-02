function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.78.65.202:6688",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 171.238.88.27:1054",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 120.77.203.0:443",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 135.181.177.112:8888",
        "SOCKS 103.82.23.118:5178",
        "SOCKS 114.236.93.203:15800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}