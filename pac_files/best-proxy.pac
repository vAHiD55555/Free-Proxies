function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 39.170.85.129:7302",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 203.189.153.170:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 103.189.218.85:6969",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 47.79.40.185:12462",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 47.250.56.98:19190",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}