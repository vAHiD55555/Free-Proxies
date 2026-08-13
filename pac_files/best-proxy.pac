function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.113.177:1080",
        "SOCKS 103.75.118.84:1080",
        "SOCKS 103.165.128.75:1080",
        "SOCKS 66.151.32.105:4443",
        "SOCKS 45.76.164.255:1085",
        "SOCKS 202.43.165.140:10802",
        "SOCKS 85.198.81.83:1080",
        "SOCKS 103.245.96.161:3214",
        "SOCKS 66.59.197.62:4000",
        "SOCKS 36.50.177.175:1080",
        "SOCKS 138.124.103.223:1080",
        "SOCKS 68.233.127.229:1080",
        "SOCKS 13.140.164.179:3526",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 186.227.119.91:8080",
        "SOCKS 46.181.243.194:1080",
        "SOCKS 13.140.164.179:3026",
        "SOCKS 109.172.55.227:1082",
        "SOCKS 104.207.139.62:1080",
        "SOCKS 112.216.54.226:12121",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}