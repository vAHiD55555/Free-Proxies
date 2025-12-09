function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.247.22.83:8080",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 35.180.188.216:80",
        "SOCKS 87.251.66.73:8080",
        "SOCKS 78.140.46.48:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 128.140.76.145:32510",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 120.77.203.0:443",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 103.28.121.58:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}