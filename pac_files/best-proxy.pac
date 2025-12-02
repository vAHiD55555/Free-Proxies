function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:54105",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 152.53.36.101:14090",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 152.53.36.101:59249",
        "SOCKS 152.53.36.101:16851",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 194.87.77.22:80",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 152.53.36.101:48385",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 67.43.236.19:6787",
        "SOCKS 8.210.4.18:7779",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}