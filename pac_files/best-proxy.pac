function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.216.49.147:1080",
        "SOCKS 38.46.214.193:1080",
        "SOCKS 171.253.95.24:1081",
        "SOCKS 195.19.51.79:1080",
        "SOCKS 141.98.85.196:1080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 204.152.192.13:1080",
        "SOCKS 171.253.95.3:1111",
        "SOCKS 144.21.39.252:1080",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 13.140.164.179:3127",
        "SOCKS 180.158.222.93:1080",
        "SOCKS 43.164.136.189:1080",
        "SOCKS 112.216.54.226:12121",
        "SOCKS 116.96.32.160:2080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 164.52.216.148:8080",
        "SOCKS 118.70.67.11:1080",
        "SOCKS 31.77.198.168:9002",
        "SOCKS 45.74.178.43:9100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}