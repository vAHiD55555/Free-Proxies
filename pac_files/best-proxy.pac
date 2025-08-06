function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.94:29225",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 103.112.53.211:6314",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 171.237.123.67:1005",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 159.100.20.206:27866",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 27.79.215.129:16000",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 218.6.105.152:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}