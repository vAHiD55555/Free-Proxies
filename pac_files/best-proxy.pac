function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 69.164.206.96:13024",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 202.62.34.102:1080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 45.59.187.85:8080",
        "SOCKS 94.184.25.15:242",
        "SOCKS 94.184.25.14:242",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 34.56.128.52:80",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 137.184.228.194:40886",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}