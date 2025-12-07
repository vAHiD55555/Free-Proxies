function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.38.155.24:46069",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 67.43.236.18:17781",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 14.19.176.188:1080",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 135.181.203.208:80",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 80.210.54.52:3128",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 159.89.113.155:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}