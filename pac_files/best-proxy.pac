function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 172.104.240.74:9053",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 115.72.14.21:10001",
        "SOCKS 197.254.84.86:32650",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 27.79.199.117:16000",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 192.177.33.17:8000",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 222.59.173.105:44238",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 179.96.28.58:80",
        "SOCKS 117.74.65.207:443",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 222.129.36.92:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}