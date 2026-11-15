function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.90.25.95:1080",
        "SOCKS 45.74.31.47:6262",
        "SOCKS 110.235.247.206:1080",
        "SOCKS 213.32.70.99:3128",
        "SOCKS 157.180.24.140:11094",
        "SOCKS 80.93.62.239:1080",
        "SOCKS 91.222.66.144:1080",
        "SOCKS 93.99.104.210:1080",
        "SOCKS 45.74.31.40:5622",
        "SOCKS 84.38.187.157:1080",
        "SOCKS 47.82.68.249:1011",
        "SOCKS 185.234.72.125:1080",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 31.59.170.18:1080",
        "SOCKS 62.169.152.56:1080",
        "SOCKS 78.29.53.117:1080",
        "SOCKS 45.74.31.40:10148",
        "SOCKS 78.29.56.178:1080",
        "SOCKS 78.111.149.103:1080",
        "SOCKS 195.14.113.24:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}