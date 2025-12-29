function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.37.77:57114",
        "SOCKS 213.5.17.84:1080",
        "SOCKS 110.235.246.228:1080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 192.169.140.98:45739",
        "SOCKS 216.229.112.25:8080",
        "SOCKS 34.124.190.108:8080",
        "SOCKS 67.43.236.18:18447",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 62.60.131.193:10182",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 41.65.160.172:1976",
        "SOCKS 62.60.131.197:14539",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 77.41.167.137:1080",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 72.10.160.172:15551",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}