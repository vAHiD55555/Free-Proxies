function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.91.78.34:20269",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 177.93.39.73:999",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 78.12.249.123:29649",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 102.68.87.48:8888",
        "SOCKS 152.53.36.101:24411",
        "SOCKS 152.53.171.242:31339",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 103.122.1.26:8080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 152.53.36.101:31797",
        "SOCKS 47.239.183.221:1011",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 152.53.36.101:21357",
        "SOCKS 183.232.157.102:1100",
        "SOCKS 160.25.8.148:11011",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 183.164.226.253:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}