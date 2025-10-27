function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.114.199.202:1080",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 103.133.26.45:8080",
        "SOCKS 179.96.28.58:80",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 159.100.20.206:27866",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 184.95.235.194:1080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 103.174.178.138:1145",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 185.61.38.140:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}