function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.133:1020",
        "SOCKS 67.43.228.250:8539",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 185.241.5.57:3128",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 157.15.93.82:8080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 119.81.189.194:80",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 51.75.126.150:57328",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}