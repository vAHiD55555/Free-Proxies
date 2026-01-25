function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.205:4694",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 62.60.131.191:6855",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 13.36.243.194:9899",
        "SOCKS 13.229.107.106:80",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 147.75.34.105:443",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 146.235.19.84:10810",
        "SOCKS 1.180.49.222:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}