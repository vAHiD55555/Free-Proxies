function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.124.167:16379",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 221.202.27.194:10810",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 61.49.87.3:80",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 117.74.65.207:80",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 35.173.76.39:8080",
        "SOCKS 128.140.76.145:30431",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}