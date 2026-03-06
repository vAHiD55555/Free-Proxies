function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.123.156.217:4220",
        "SOCKS 45.132.255.53:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 103.104.99.89:80",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 206.123.156.210:7388",
        "SOCKS 8.217.129.162:1080",
        "SOCKS 206.123.156.186:8164",
        "SOCKS 206.123.156.217:6207",
        "SOCKS 119.148.45.170:22122",
        "SOCKS 138.99.94.51:8080",
        "SOCKS 213.35.110.67:10929",
        "SOCKS 173.249.5.133:1080",
        "SOCKS 206.123.156.213:5864",
        "SOCKS 1.225.116.115:1080",
        "SOCKS 206.123.156.203:5351",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 193.233.254.63:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}