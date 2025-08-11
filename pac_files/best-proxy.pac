function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 209.121.164.51:31147",
        "SOCKS 45.22.209.157:8888",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 135.181.203.208:80",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 222.129.37.77:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}