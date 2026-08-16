function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 161.35.90.93:1083",
        "SOCKS 95.31.144.233:1080",
        "SOCKS 107.191.44.214:1081",
        "SOCKS 183.173.30.20:6518",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 171.253.95.24:1081",
        "SOCKS 104.194.8.103:40001",
        "SOCKS 216.106.179.216:49259",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 216.48.184.253:8080",
        "SOCKS 147.45.221.111:1082",
        "SOCKS 47.82.118.11:1011",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 156.245.246.51:7890",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 95.31.16.116:1081",
        "SOCKS 147.45.39.160:30001",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 216.106.179.216:49388",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}