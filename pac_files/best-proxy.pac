function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.185.85.138:1080",
        "SOCKS 77.110.127.224:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 45.136.130.191:8443",
        "SOCKS 206.123.156.238:4863",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 14.56.177.44:3128",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 179.96.28.58:80",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 206.123.156.228:42241",
        "SOCKS 116.254.118.180:80",
        "SOCKS 206.123.156.213:4153",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}