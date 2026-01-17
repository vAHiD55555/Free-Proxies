function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 209.141.58.213:5556",
        "SOCKS 62.60.131.179:5329",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 47.83.211.225:1100",
        "SOCKS 62.60.131.197:21399",
        "SOCKS 62.60.131.193:4916",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 202.79.26.242:1080",
        "SOCKS 169.57.157.148:80",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 36.255.98.161:8888",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 62.60.131.194:28804",
        "SOCKS 36.255.98.167:4119",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}