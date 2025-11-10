function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.88.104.126:3344",
        "SOCKS 202.65.127.194:1080",
        "SOCKS 152.53.36.101:17527",
        "SOCKS 121.165.169.133:8899",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 35.206.88.200:8888",
        "SOCKS 23.94.63.140:21080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 152.53.36.101:20709",
        "SOCKS 152.53.171.242:57769",
        "SOCKS 8.222.151.218:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}