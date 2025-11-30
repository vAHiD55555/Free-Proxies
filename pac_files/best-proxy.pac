function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.244.208.195:23699",
        "SOCKS 181.78.202.29:8080",
        "SOCKS 152.53.36.101:38936",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 8.220.141.8:8081",
        "SOCKS 171.234.50.112:5514",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 152.53.36.101:12163",
        "SOCKS 152.53.36.101:25717",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 206.189.41.134:3128",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 163.5.128.237:48852",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 152.53.36.101:19101",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 123.56.89.191:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}