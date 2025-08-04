function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.156.74.154:1111",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 45.59.117.2:8080",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 103.245.205.33:35158",
        "SOCKS 41.223.119.156:3128",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 194.152.50.92:5678",
        "SOCKS 89.249.62.8:3128",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 80.78.30.182:3128",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 41.249.136.65:39811",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 135.181.203.208:80",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 176.9.164.117:60013",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}