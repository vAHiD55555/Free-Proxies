function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 207.254.71.62:8088",
        "SOCKS 62.60.131.205:14785",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 36.255.98.163:4439",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 36.255.98.165:12456",
        "SOCKS 139.59.1.14:80",
        "SOCKS 185.245.104.100:33333",
        "SOCKS 36.255.98.160:5722",
        "SOCKS 77.221.141.244:21406",
        "SOCKS 62.60.131.194:13268",
        "SOCKS 36.255.98.162:10809",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 62.60.131.203:4359",
        "SOCKS 77.41.167.137:1080",
        "SOCKS 62.60.131.204:4878",
        "SOCKS 88.99.30.237:5062",
        "SOCKS 62.60.131.205:5441",
        "SOCKS 36.255.98.160:4226",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}