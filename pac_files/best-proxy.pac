function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 50.112.100.138:80",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 185.13.230.212:8082",
        "SOCKS 103.56.206.77:8099",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 42.118.0.5:16000",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 194.59.204.87:9080",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 147.75.34.74:10019",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 51.20.192.194:3128",
        "SOCKS 222.59.173.105:44144",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 98.185.94.76:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}