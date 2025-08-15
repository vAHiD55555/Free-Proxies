function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.171:9915",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 223.135.156.183:8080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 117.161.170.163:9408",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 45.91.201.100:8081",
        "SOCKS 39.99.34.28:8888",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 192.177.33.54:8000",
        "SOCKS 103.90.226.245:1080",
        "SOCKS 217.52.247.89:1981",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}