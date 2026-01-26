function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 147.45.217.143:443",
        "SOCKS 36.255.98.168:17216",
        "SOCKS 36.255.98.178:7775",
        "SOCKS 157.66.16.69:5568",
        "SOCKS 146.103.98.171:54101",
        "SOCKS 36.255.98.175:5240",
        "SOCKS 36.255.98.176:4295",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 36.255.98.184:17309",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 62.60.231.71:56608",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 36.255.98.178:6197",
        "SOCKS 62.60.131.181:4958",
        "SOCKS 62.60.131.182:17795",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 36.255.98.166:10415",
        "SOCKS 104.248.158.27:25100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}