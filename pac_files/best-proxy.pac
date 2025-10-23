function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.33.248.45:1080",
        "SOCKS 159.223.164.184:20410",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 137.184.152.66:20309",
        "SOCKS 195.91.129.101:1337",
        "SOCKS 137.184.152.66:20348",
        "SOCKS 47.250.37.16:1100",
        "SOCKS 202.5.60.46:1080",
        "SOCKS 160.25.8.26:11011",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 185.93.89.180:4111",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 159.223.164.184:20348",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}