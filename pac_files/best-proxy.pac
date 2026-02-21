function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.251.74.38:8443",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 85.209.129.60:2222",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 123.54.197.16:22929",
        "SOCKS 20.78.213.56:80",
        "SOCKS 103.139.139.70:8181",
        "SOCKS 123.54.197.49:23519",
        "SOCKS 123.54.197.49:20088",
        "SOCKS 144.31.184.59:1080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 152.70.137.18:8888",
        "SOCKS 83.219.250.8:62920",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 85.133.227.182:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}