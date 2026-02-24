function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 14.56.118.224:3128",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 8.220.205.172:8008",
        "SOCKS 123.54.197.16:23079",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 18.141.177.23:80",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 85.208.108.43:2094",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 37.120.222.132:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}