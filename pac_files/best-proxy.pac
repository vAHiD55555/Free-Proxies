function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 135.181.203.208:80",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 202.232.52.162:8080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 67.43.236.22:29979",
        "SOCKS 103.249.200.152:60599",
        "SOCKS 45.78.226.173:20000",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 27.147.215.56:13457",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 27.71.134.202:16000",
        "SOCKS 121.42.9.57:7201",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}