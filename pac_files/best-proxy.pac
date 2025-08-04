function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.79.252.5:1001",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 144.22.175.58:1080",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 140.82.22.235:34587",
        "SOCKS 159.89.239.166:18084",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 1.52.196.1:16000",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 185.175.47.162:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}