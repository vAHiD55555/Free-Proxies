function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.165.118.96:3128",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 115.72.168.217:10017",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 27.76.189.122:16000",
        "SOCKS 167.71.41.58:8080",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 5.129.69.36:1080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 64.181.240.152:3128",
        "SOCKS 72.195.114.169:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}