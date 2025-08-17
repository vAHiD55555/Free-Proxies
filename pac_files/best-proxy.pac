function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.237.12.0:1111",
        "SOCKS 103.82.23.164:8888",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 20.54.244.246:3128",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 123.21.7.190:1009",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 27.79.254.44:16000",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 135.181.203.208:80",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 42.118.24.188:16000",
        "SOCKS 42.118.3.68:16000",
        "SOCKS 45.174.95.142:999",
        "SOCKS 27.79.192.226:16000",
        "SOCKS 42.119.2.245:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}