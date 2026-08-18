function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 85.198.81.83:1080",
        "SOCKS 144.91.83.39:9050",
        "SOCKS 14.207.199.94:8080",
        "SOCKS 139.28.240.202:1082",
        "SOCKS 143.20.185.219:9150",
        "SOCKS 72.255.9.24:1080",
        "SOCKS 47.238.236.151:5555",
        "SOCKS 66.59.197.63:3128",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 193.122.105.251:65535",
        "SOCKS 140.245.238.56:53",
        "SOCKS 151.243.153.157:8118",
        "SOCKS 85.209.120.145:1080",
        "SOCKS 31.56.32.59:10800",
        "SOCKS 160.250.54.8:9000",
        "SOCKS 178.128.82.131:10808",
        "SOCKS 91.246.1.6:4433",
        "SOCKS 103.142.255.33:69",
        "SOCKS 80.209.242.189:1080",
        "SOCKS 8.221.126.184:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}