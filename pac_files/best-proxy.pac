function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 42.113.21.218:16000",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 192.177.139.220:8000",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 118.68.64.197:16000",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 42.119.156.140:16000",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 1.54.145.15:16000",
        "SOCKS 43.159.54.102:8888",
        "SOCKS 218.64.122.99:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}