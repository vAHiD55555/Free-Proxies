function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.159.43:39019",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 179.96.28.58:80",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 47.81.14.7:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}