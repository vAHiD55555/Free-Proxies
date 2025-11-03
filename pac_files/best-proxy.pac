function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.96.201.54:1080",
        "SOCKS 18.163.49.218:3030",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 152.53.36.101:25055",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 113.192.12.33:9898",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 152.53.36.101:15099",
        "SOCKS 123.253.108.109:8999",
        "SOCKS 115.127.105.163:6699",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 91.121.48.221:38711",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}