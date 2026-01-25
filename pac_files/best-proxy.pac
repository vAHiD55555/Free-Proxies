function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 88.99.30.148:5051",
        "SOCKS 36.255.98.184:4995",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 146.235.19.84:10819",
        "SOCKS 178.130.47.129:1082",
        "SOCKS 36.255.98.161:4311",
        "SOCKS 88.99.27.163:5093",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 62.60.231.71:56608",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 67.43.236.19:32149",
        "SOCKS 146.235.19.84:10810",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 46.146.220.180:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}