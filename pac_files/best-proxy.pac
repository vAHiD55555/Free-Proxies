function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 80.240.100.6:8080",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 5.199.166.251:9061",
        "SOCKS 36.255.98.167:4888",
        "SOCKS 125.209.110.83:39617",
        "SOCKS 62.60.131.205:4859",
        "SOCKS 62.60.131.203:5182",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 36.255.98.168:4017",
        "SOCKS 159.8.114.37:80",
        "SOCKS 88.99.29.50:5133",
        "SOCKS 195.35.113.29:1080",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 88.99.27.163:5093",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 62.60.131.253:4145",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 62.60.131.203:4444",
        "SOCKS 36.255.98.160:6615",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}