function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.106.226:1088",
        "SOCKS 135.181.203.208:80",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 119.75.57.106:33333",
        "SOCKS 103.204.211.48:32255",
        "SOCKS 43.209.130.76:43249",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 213.255.209.88:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}