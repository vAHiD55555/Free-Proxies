function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.105.230.45:3128",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 103.247.240.34:8080",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 139.59.230.8:1001",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 116.105.31.185:9100",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 162.223.89.83:1080",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 121.205.215.44:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}