function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 15.160.181.77:8331",
        "SOCKS 152.53.36.101:46753",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 8.222.178.172:1011",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 43.133.32.76:1777",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 202.47.185.45:8080",
        "SOCKS 152.53.171.242:31281",
        "SOCKS 159.223.164.184:20035",
        "SOCKS 94.230.127.180:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 152.53.36.101:16739",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 222.129.36.92:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}