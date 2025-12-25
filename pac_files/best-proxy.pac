function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.76.149.140:1080",
        "SOCKS 124.248.167.211:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 37.157.217.144:10810",
        "SOCKS 202.62.59.216:1080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 124.248.190.48:1080",
        "SOCKS 212.2.254.246:3128",
        "SOCKS 128.140.76.145:20909",
        "SOCKS 120.77.203.0:443",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 103.118.85.144:1080",
        "SOCKS 47.76.198.148:1111",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 114.236.93.203:15800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}