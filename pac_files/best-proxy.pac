function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.210.79:16379",
        "SOCKS 47.91.89.3:1111",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 157.90.183.51:5555",
        "SOCKS 202.62.50.8:1080",
        "SOCKS 185.175.229.58:1080",
        "SOCKS 147.45.231.206:1080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 220.158.234.84:1080",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 159.203.112.20:9055",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 27.131.14.9:1088",
        "SOCKS 45.61.188.134:44499",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 118.70.151.55:1080",
        "SOCKS 193.29.224.20:1080",
        "SOCKS 43.110.40.117:8888",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 222.71.131.131:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}