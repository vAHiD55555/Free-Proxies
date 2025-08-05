function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 220.248.188.75:17211",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 42.118.2.170:16000",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 192.177.33.54:8000",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 77.238.103.98:8080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 34.124.190.108:8080",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 36.111.205.239:6666",
        "SOCKS 98.185.94.76:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}