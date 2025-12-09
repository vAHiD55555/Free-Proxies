function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.180.0.162:7302",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 121.167.212.146:8089",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 51.44.182.158:400",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}