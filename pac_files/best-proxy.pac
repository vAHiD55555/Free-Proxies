function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 172.104.4.144:9050",
        "SOCKS 116.104.83.249:30019",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 27.79.222.9:16000",
        "SOCKS 154.236.177.102:1977",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 218.6.105.152:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}