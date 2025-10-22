function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.185.94.76:4145",
        "SOCKS 185.93.89.164:11155",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 185.93.89.183:8090",
        "SOCKS 47.91.121.127:3128",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 89.169.36.109:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 218.152.130.48:3128",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 185.93.89.183:8849",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}