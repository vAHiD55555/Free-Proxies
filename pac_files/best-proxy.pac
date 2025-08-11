function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 174.75.211.222:4145",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 116.105.220.34:10002",
        "SOCKS 203.162.13.26:6868",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 64.225.70.191:8888",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 51.15.236.150:16379",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 15.168.12.20:3128",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 212.175.61.30:8080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 27.71.132.134:16000",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 129.213.68.20:54321",
        "SOCKS 67.43.236.21:5423",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}