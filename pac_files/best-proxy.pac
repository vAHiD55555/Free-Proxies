function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 220.158.232.118:1080",
        "SOCKS 141.148.65.110:1081",
        "SOCKS 47.238.128.246:45",
        "SOCKS 185.193.25.206:9050",
        "SOCKS 116.96.32.160:1111",
        "SOCKS 176.192.41.172:4444",
        "SOCKS 95.31.16.116:1081",
        "SOCKS 119.91.2.5:10808",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 216.106.179.216:49497",
        "SOCKS 188.93.140.146:1080",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 91.185.60.226:1080",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 45.76.164.255:1085",
        "SOCKS 34.101.184.164:3128",
        "SOCKS 171.253.95.3:1045",
        "SOCKS 172.105.192.212:9080",
        "SOCKS 124.61.132.233:4444",
        "SOCKS 216.48.184.253:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}