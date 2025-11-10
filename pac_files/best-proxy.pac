function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.173:1157",
        "SOCKS 62.84.96.215:1080",
        "SOCKS 121.165.169.133:8899",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 152.53.171.242:44021",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 152.53.171.242:51911",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 144.24.66.26:8081",
        "SOCKS 152.53.36.101:29307",
        "SOCKS 37.221.193.221:19975",
        "SOCKS 45.144.52.150:3128",
        "SOCKS 185.244.77.62:1080",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 14.234.141.1:20499",
        "SOCKS 132.148.244.30:45157",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 109.245.231.73:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}