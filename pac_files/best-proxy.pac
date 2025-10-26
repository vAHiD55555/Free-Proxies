function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.74.65.207:443",
        "SOCKS 64.225.49.248:1080",
        "SOCKS 216.68.128.121:4145",
        "SOCKS 185.93.89.143:20315",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 47.84.42.163:1111",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 149.88.71.91:8080",
        "SOCKS 77.50.104.110:1080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 185.93.89.181:8118",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 47.79.94.191:1122",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 51.158.64.130:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}