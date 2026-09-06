function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:4262",
        "SOCKS 147.45.218.79:1084",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 45.74.31.30:10718",
        "SOCKS 45.194.41.143:8080",
        "SOCKS 45.194.41.43:8080",
        "SOCKS 65.21.252.66:10808",
        "SOCKS 98.144.147.140:1080",
        "SOCKS 45.95.233.88:1082",
        "SOCKS 82.193.116.160:21003",
        "SOCKS 178.236.16.4:1080",
        "SOCKS 116.241.240.176:11080",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 37.187.92.9:1031",
        "SOCKS 157.20.182.240:1080",
        "SOCKS 45.74.31.30:4072",
        "SOCKS 193.23.200.117:1080",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 5.255.123.162:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}