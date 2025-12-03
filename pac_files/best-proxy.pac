function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.68.133:8811",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 31.220.22.125:3128",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 38.253.88.242:999",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 103.239.23.133:3125",
        "SOCKS 51.15.223.12:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}