function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.236.187.104:40355",
        "SOCKS 67.201.39.14:4145",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 157.230.220.25:4857",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 36.133.208.130:8888",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 147.45.60.60:80",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 140.238.184.182:3128",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 174.138.62.182:43715",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}