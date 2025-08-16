function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 60.13.42.157:1080",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 15.152.35.198:3129",
        "SOCKS 20.54.244.246:3128",
        "SOCKS 78.13.104.52:1047",
        "SOCKS 51.158.103.0:16379",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 154.236.177.102:1977",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 152.53.194.46:8065",
        "SOCKS 94.247.129.244:3128",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 45.4.202.170:999",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 27.79.180.22:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}