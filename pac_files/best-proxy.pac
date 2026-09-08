function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:4152",
        "SOCKS 34.69.61.247:80",
        "SOCKS 193.233.218.121:1080",
        "SOCKS 195.161.132.106:7776",
        "SOCKS 202.78.167.58:9050",
        "SOCKS 89.189.132.154:1080",
        "SOCKS 45.74.31.30:4192",
        "SOCKS 158.220.101.43:1080",
        "SOCKS 65.109.196.122:2091",
        "SOCKS 169.58.97.115:1080",
        "SOCKS 45.74.31.30:4076",
        "SOCKS 212.3.127.242:10801",
        "SOCKS 152.67.221.233:8008",
        "SOCKS 62.60.210.173:1080",
        "SOCKS 31.76.20.131:1080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 38.76.213.131:443",
        "SOCKS 103.162.63.166:1111",
        "SOCKS 103.239.201.50:58765",
        "SOCKS 45.74.31.30:4119",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}