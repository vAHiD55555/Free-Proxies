function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.59.173.105:44077",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 45.22.209.157:8888",
        "SOCKS 45.166.93.113:999",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 58.186.92.156:16000",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 116.103.132.205:1019",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 115.72.10.226:10010",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 223.25.110.37:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}