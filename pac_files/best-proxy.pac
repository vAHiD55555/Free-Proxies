function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.89.68.78:9050",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 188.0.167.195:8080",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 114.67.227.38:8080",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 202.62.62.51:1080",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 35.180.188.216:80",
        "SOCKS 123.182.233.70:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}