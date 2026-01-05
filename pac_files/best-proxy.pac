function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.54.57.117:50460",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 160.22.198.4:8082",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 176.100.1.170:3128",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 92.119.126.229:8118",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 116.203.139.209:3128",
        "SOCKS 45.88.0.116:3128",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 115.114.77.133:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}