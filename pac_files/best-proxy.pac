function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.115.42.157:8044",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 40.192.27.104:41",
        "SOCKS 47.236.86.93:33333",
        "SOCKS 159.223.164.184:21163",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 103.124.227.89:12445",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 159.223.164.184:20441",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 137.184.152.66:20035",
        "SOCKS 159.223.164.184:20172",
        "SOCKS 43.133.32.76:1777",
        "SOCKS 202.5.60.46:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}