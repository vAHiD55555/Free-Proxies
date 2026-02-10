function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 147.75.34.105:443",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 217.76.245.80:999",
        "SOCKS 67.43.228.251:17383",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 85.133.227.150:80",
        "SOCKS 203.73.62.104:60808",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 187.63.9.62:63253",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 194.233.73.36:8080",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 123.54.197.19:20054",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 114.236.93.203:15800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}