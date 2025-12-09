function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.89.113.155:8080",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 15.168.235.57:391",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 194.87.77.22:80",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 216.218.249.28:8181",
        "SOCKS 159.223.32.95:8080",
        "SOCKS 67.43.228.252:5023",
        "SOCKS 8.210.89.96:1080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 154.37.155.7:1080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 91.107.138.98:2255",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}