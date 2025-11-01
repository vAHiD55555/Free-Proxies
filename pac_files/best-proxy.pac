function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.108.159.129:8081",
        "SOCKS 118.27.111.97:80",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 18.60.222.217:57032",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 14.251.13.0:8080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 103.160.12.147:8199",
        "SOCKS 135.125.97.184:42991",
        "SOCKS 103.155.161.68:443",
        "SOCKS 45.77.156.171:9091",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 13.59.113.45:31280",
        "SOCKS 176.108.246.18:10801",
        "SOCKS 23.251.62.210:10080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}