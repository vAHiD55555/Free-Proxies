function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.165:7890",
        "SOCKS 62.60.131.184:4115",
        "SOCKS 117.50.7.101:8000",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 62.60.131.186:4114",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 62.60.131.186:4646",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 209.97.149.157:80",
        "SOCKS 62.60.131.188:33607",
        "SOCKS 62.60.131.189:5601",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 36.255.98.180:11655",
        "SOCKS 8.130.37.235:3128",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 222.129.32.188:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}