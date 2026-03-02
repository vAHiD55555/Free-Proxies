function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.102.109.41:999",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 58.19.55.17:15135",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 206.123.156.209:4145",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 58.19.55.17:15146",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 194.233.68.54:1088",
        "SOCKS 8.212.151.166:3129",
        "SOCKS 206.123.156.184:4138",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 144.31.199.9:1080",
        "SOCKS 8.137.62.53:11",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}