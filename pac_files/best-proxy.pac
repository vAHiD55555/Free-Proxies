function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.136.107.70:1080",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 149.104.4.88:10809",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 213.35.110.67:10872",
        "SOCKS 206.168.214.240:3128",
        "SOCKS 5.9.52.236:60000",
        "SOCKS 195.133.77.82:14223",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 203.189.151.19:1080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 139.59.24.173:1080",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 8.220.188.140:80",
        "SOCKS 213.35.110.67:10809",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 146.235.19.84:10810",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}