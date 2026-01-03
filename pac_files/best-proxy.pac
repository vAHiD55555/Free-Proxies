function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.124.167:16379",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 43.133.2.68:6006",
        "SOCKS 94.74.91.27:1081",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 193.233.254.7:1080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 43.167.177.101:6006",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 31.129.147.102:1080",
        "SOCKS 62.60.131.186:4145",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 62.60.131.181:42802",
        "SOCKS 43.167.190.148:6006",
        "SOCKS 43.133.21.94:6006",
        "SOCKS 125.141.133.49:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}