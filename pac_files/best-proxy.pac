function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.251.43.115:33333",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 49.254.146.127:28919",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 203.3.112.2:6666",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 58.186.92.98:16000",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 200.201.134.184:8787",
        "SOCKS 65.38.213.154:8881",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 171.237.59.49:10001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}