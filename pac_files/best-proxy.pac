function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.32.173:57114",
        "SOCKS 34.166.117.165:1080",
        "SOCKS 5.202.103.101:514",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 170.130.202.134:3128",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 74.81.46.242:60007",
        "SOCKS 45.144.233.32:8080",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 27.79.171.13:16000",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 103.189.218.85:6969",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 47.91.121.127:8443",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 222.129.32.188:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}