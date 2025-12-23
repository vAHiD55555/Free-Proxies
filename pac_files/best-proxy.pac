function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.154.129:1080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 93.184.4.37:1080",
        "SOCKS 203.189.156.11:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 46.229.66.241:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 47.237.77.205:1011",
        "SOCKS 109.168.173.173:1080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 144.91.95.238:58237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}