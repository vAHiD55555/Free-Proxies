function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.16.77.50:3128",
        "SOCKS 123.21.6.109:1010",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 171.228.132.215:10089",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 154.16.41.38:5555",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 173.44.175.229:3128",
        "SOCKS 66.201.40.43:8888",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 117.161.170.163:9034",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 14.162.194.58:10001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}