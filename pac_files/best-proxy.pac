function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.202.103.223:29210",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 45.146.130.45:8091",
        "SOCKS 135.181.203.208:80",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 47.243.201.253:1111",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 45.10.43.65:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}