function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.49.22.23:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 146.103.43.35:3128",
        "SOCKS 34.101.184.164:3128",
        "SOCKS 107.191.58.81:1080",
        "SOCKS 47.243.59.250:1011",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 45.95.233.237:1082",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 138.2.216.186:1080",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 31.207.75.177:1080",
        "SOCKS 178.252.165.226:1080",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 167.71.176.220:9059",
        "SOCKS 103.126.218.179:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}