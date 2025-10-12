function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 34.222.65.100:1976",
        "SOCKS 179.27.158.78:80",
        "SOCKS 43.129.234.168:1080",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 14.103.144.65:8888",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 94.141.118.130:1080",
        "SOCKS 103.192.158.115:46",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 159.65.69.186:9200",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}