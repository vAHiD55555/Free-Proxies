function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 68.233.127.229:1080",
        "SOCKS 89.44.242.212:10808",
        "SOCKS 120.133.82.62:44223",
        "SOCKS 91.246.1.6:4433",
        "SOCKS 193.221.203.14:1080",
        "SOCKS 77.239.106.24:1080",
        "SOCKS 61.177.181.46:10808",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 37.9.4.101:1088",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 77.239.108.222:11091",
        "SOCKS 188.127.224.164:2080",
        "SOCKS 104.207.139.62:1080",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 49.0.0.175:1080",
        "SOCKS 176.126.70.111:16379",
        "SOCKS 45.192.9.27:1080",
        "SOCKS 80.211.131.230:9050",
        "SOCKS 192.144.57.124:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}