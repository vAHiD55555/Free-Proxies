function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.66.84.24:1983",
        "SOCKS 1.55.60.47:16000",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 209.14.98.5:8080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 45.175.155.16:999",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 192.177.139.23:8000",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 27.79.237.178:16000",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 135.181.203.208:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}