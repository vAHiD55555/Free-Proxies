function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 135.181.203.208:80",
        "SOCKS 209.14.98.6:8080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 149.129.255.179:18080",
        "SOCKS 47.86.42.224:1024",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 138.124.49.149:10808",
        "SOCKS 103.171.83.25:10810",
        "SOCKS 47.243.59.250:3356",
        "SOCKS 119.18.149.83:65388",
        "SOCKS 120.77.203.0:443",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 159.65.69.186:9200",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}