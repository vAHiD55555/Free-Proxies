function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.205.246.63:8080",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 37.187.92.9:1026",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 47.84.70.29:8888",
        "SOCKS 152.53.36.101:23337",
        "SOCKS 152.53.171.242:38585",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 37.221.193.221:15442",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 37.221.193.221:10070",
        "SOCKS 125.141.139.110:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}