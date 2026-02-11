function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 12.156.45.155:3128",
        "SOCKS 113.45.250.180:443",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 94.182.149.92:2012",
        "SOCKS 160.20.55.235:8080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 123.54.197.19:22054",
        "SOCKS 93.184.5.121:1080",
        "SOCKS 152.53.171.242:12768",
        "SOCKS 178.72.129.20:8443",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 152.53.171.242:16006",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 123.54.197.51:20675",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}