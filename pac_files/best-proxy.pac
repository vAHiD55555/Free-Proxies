function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.190.102.40:4145",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 8.209.96.245:3129",
        "SOCKS 103.180.123.247:1452",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 103.132.52.42:8080",
        "SOCKS 41.65.160.173:1976",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 202.5.60.46:1080",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 152.53.36.101:25055",
        "SOCKS 8.213.128.6:111",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 152.53.36.101:27855",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 5.78.67.134:8088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}