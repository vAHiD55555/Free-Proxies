function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.109.12:46249",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 18.141.177.23:80",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 103.28.121.58:80",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 186.116.148.52:8080",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 185.118.51.230:3128",
        "SOCKS 91.107.154.88:443",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 5.61.62.24:8118",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 203.189.154.129:1080",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 8.210.4.18:7779",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}