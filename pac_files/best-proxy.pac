function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.21:5423",
        "SOCKS 85.133.240.75:8080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 118.68.172.146:16000",
        "SOCKS 135.181.203.208:80",
        "SOCKS 18.224.188.107:3128",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 27.71.228.47:3128",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 77.238.103.98:8080",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 159.89.239.166:18084",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 18.143.173.102:21681",
        "SOCKS 209.121.164.50:31147",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 123.56.89.191:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}