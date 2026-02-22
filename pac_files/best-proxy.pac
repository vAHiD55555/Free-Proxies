function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 119.84.215.127:3256",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 62.133.62.12:1082",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 54.173.56.172:80",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 213.21.233.242:1080",
        "SOCKS 54.88.116.133:80",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 116.242.89.230:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}