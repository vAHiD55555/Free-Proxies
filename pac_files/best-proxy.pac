function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.169:5678",
        "SOCKS 62.60.131.186:31535",
        "SOCKS 213.35.110.67:10808",
        "SOCKS 62.60.131.184:7642",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 34.56.128.52:80",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 62.60.131.191:37108",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 113.142.152.75:8088",
        "SOCKS 62.60.131.194:5060",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 36.255.98.180:4156",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 103.148.112.69:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}