function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.182.233.70:7302",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 121.43.154.123:80",
        "SOCKS 116.80.80.201:3172",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 120.26.104.146:8085",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 179.96.28.58:80",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 124.248.184.144:1080",
        "SOCKS 40.177.106.156:8080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 51.89.68.78:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}