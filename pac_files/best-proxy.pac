function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 177.53.215.119:8080",
        "SOCKS 103.247.23.37:1111",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 35.75.2.41:3128",
        "SOCKS 18.60.222.217:57032",
        "SOCKS 37.221.193.221:26149",
        "SOCKS 157.180.121.252:49229",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 152.53.36.101:44109",
        "SOCKS 117.74.65.207:80",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 67.43.228.251:12125",
        "SOCKS 177.234.217.44:999",
        "SOCKS 95.216.214.204:8888",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 89.58.45.94:40219",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 35.79.15.218:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}