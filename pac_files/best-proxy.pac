function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:16835",
        "SOCKS 34.85.74.166:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 123.54.197.52:23309",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 85.208.108.43:2094",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 152.53.171.242:18574",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 190.242.157.215:8080",
        "SOCKS 152.53.171.242:21525",
        "SOCKS 152.53.171.242:14186",
        "SOCKS 95.188.64.220:1080",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 123.54.197.25:20904",
        "SOCKS 177.10.39.36:1088",
        "SOCKS 123.54.197.20:22370",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 20.210.39.153:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}