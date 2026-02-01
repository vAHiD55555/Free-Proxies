function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.163:14483",
        "SOCKS 36.255.98.164:4500",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 89.46.249.248:8001",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 62.60.131.192:8963",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 169.57.157.148:80",
        "SOCKS 13.229.107.106:80",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 209.97.150.167:8080",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 51.195.139.95:44648",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}