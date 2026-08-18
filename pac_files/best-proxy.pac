function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 80.72.180.122:1080",
        "SOCKS 80.93.62.239:1080",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 208.87.128.239:9150",
        "SOCKS 177.5.74.74:1080",
        "SOCKS 216.106.179.216:49388",
        "SOCKS 5.249.165.195:20000",
        "SOCKS 194.127.179.9:10806",
        "SOCKS 128.0.26.27:1080",
        "SOCKS 84.52.227.36:9050",
        "SOCKS 46.0.229.208:1080",
        "SOCKS 164.52.216.68:8080",
        "SOCKS 77.73.14.147:1080",
        "SOCKS 140.238.241.74:1080",
        "SOCKS 47.237.113.119:3129",
        "SOCKS 120.133.82.62:44135",
        "SOCKS 111.119.162.248:10912",
        "SOCKS 46.101.36.247:9050",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 91.107.243.254:9116",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}