function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.253.95.241:1045",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 90.8.144.108:3317",
        "SOCKS 51.15.253.45:8080",
        "SOCKS 72.56.106.48:1080",
        "SOCKS 38.242.156.163:9050",
        "SOCKS 154.203.132.81:5080",
        "SOCKS 120.133.82.62:44205",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 112.90.88.102:20000",
        "SOCKS 171.253.95.24:2102",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 192.9.231.220:30001",
        "SOCKS 85.137.245.75:1080",
        "SOCKS 110.49.66.210:8080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 95.215.8.84:30755",
        "SOCKS 161.35.90.93:1082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}