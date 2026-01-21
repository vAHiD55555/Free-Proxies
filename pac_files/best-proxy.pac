function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.228.212.223:29272",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 62.60.131.186:17071",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 36.255.98.161:5703",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 213.35.110.67:10808",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 18.141.177.23:80",
        "SOCKS 109.120.151.87:443",
        "SOCKS 62.60.131.196:8082",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 62.60.131.203:4242",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 72.10.160.94:10499",
        "SOCKS 218.6.105.152:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}