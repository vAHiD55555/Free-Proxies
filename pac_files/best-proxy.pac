function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 3.24.178.81:80",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 18.188.141.177:1145",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 43.165.187.118:80",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 128.140.76.145:12523",
        "SOCKS 91.214.62.121:8053",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 45.144.234.129:53764",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 128.140.76.145:55115",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 139.59.225.188:12827",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}