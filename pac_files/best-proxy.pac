function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 77.83.198.38:1080",
        "SOCKS 193.233.254.9:1080",
        "SOCKS 91.211.115.127:1080",
        "SOCKS 203.189.152.79:1080",
        "SOCKS 124.248.177.43:1080",
        "SOCKS 147.75.83.117:80",
        "SOCKS 43.167.245.204:6006",
        "SOCKS 103.239.201.50:58765",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 43.167.247.63:6006",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 110.235.248.150:1080",
        "SOCKS 43.133.23.27:6006",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 43.167.246.21:6006",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 8.210.4.18:7779",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}