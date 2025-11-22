function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.16.56.189:9490",
        "SOCKS 198.23.236.198:8888",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 43.153.64.222:16894",
        "SOCKS 47.74.46.81:50",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 34.124.190.108:8080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 47.79.19.26:8118",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 186.96.180.17:999",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 203.74.125.18:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}