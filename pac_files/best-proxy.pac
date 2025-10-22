function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.54.57.117:50460",
        "SOCKS 159.223.164.184:21163",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 47.83.8.254:1122",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 67.43.236.19:21023",
        "SOCKS 47.76.249.160:1100",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 159.223.164.184:20169",
        "SOCKS 116.98.50.140:1080",
        "SOCKS 47.82.97.147:33333",
        "SOCKS 192.206.202.1:8080",
        "SOCKS 141.94.195.25:22558",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 47.238.37.111:1100",
        "SOCKS 18.143.173.102:21681",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}