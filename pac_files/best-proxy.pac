function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.195.34.42:4145",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 188.127.224.164:2080",
        "SOCKS 171.22.183.64:12347",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 201.184.165.91:1080",
        "SOCKS 203.25.208.163:1515",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 144.202.14.153:50000",
        "SOCKS 159.195.49.27:1080",
        "SOCKS 95.182.100.163:9050",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 185.103.252.218:443",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 62.106.66.174:143",
        "SOCKS 212.129.243.68:1143",
        "SOCKS 160.250.54.5:9000",
        "SOCKS 167.233.233.145:2222",
        "SOCKS 147.139.201.108:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}