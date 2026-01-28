function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.146.204.175:1080",
        "SOCKS 94.230.127.180:1080",
        "SOCKS 36.255.98.167:4071",
        "SOCKS 36.255.98.160:6615",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 62.60.131.203:6261",
        "SOCKS 185.244.77.62:1080",
        "SOCKS 36.255.98.181:5420",
        "SOCKS 103.163.244.106:1080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 36.255.98.160:5722",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 62.60.131.205:14785",
        "SOCKS 171.254.94.125:8088",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 62.60.131.203:8192",
        "SOCKS 36.255.98.160:7023",
        "SOCKS 62.60.131.195:37074",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}