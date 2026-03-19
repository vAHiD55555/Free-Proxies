function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.145.208.178:8443",
        "SOCKS 128.90.49.77:1080",
        "SOCKS 119.81.71.27:80",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 206.123.156.178:4003",
        "SOCKS 38.34.179.28:8443",
        "SOCKS 45.136.130.173:8447",
        "SOCKS 206.123.156.178:4049",
        "SOCKS 38.145.208.241:8443",
        "SOCKS 159.223.53.194:1080",
        "SOCKS 38.34.179.193:8443",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 213.165.58.5:1080",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 158.160.215.167:8123",
        "SOCKS 173.249.5.133:1080",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 139.59.7.217:36590",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}