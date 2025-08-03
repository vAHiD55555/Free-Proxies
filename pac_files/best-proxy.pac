function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.158.8.123:3128",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 125.77.135.240:80",
        "SOCKS 77.83.246.56:3128",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 212.110.188.195:34411",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 190.85.141.170:9090",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 185.155.99.114:8118",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}