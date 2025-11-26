function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.164.178:2493",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 103.189.218.85:6969",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 103.73.161.148:1080",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 103.245.96.124:6969",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 103.187.39.21:1080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 98.175.31.222:4145",
        "SOCKS 8.210.4.18:7779",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}