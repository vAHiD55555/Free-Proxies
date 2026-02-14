function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.106.150.70:1080",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 72.10.160.91:6683",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 123.54.197.16:23235",
        "SOCKS 67.43.228.253:30635",
        "SOCKS 72.10.160.90:32931",
        "SOCKS 190.242.157.215:8080",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 217.76.245.80:999",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 115.69.208.6:1080",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 110.235.255.252:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}