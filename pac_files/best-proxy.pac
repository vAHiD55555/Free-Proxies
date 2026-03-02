function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 141.0.11.241:80",
        "SOCKS 38.60.209.216:20002",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 185.118.51.133:3128",
        "SOCKS 138.2.72.115:1090",
        "SOCKS 35.180.188.216:80",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 123.57.0.163:8888",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 165.154.162.230:1080",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 8.137.62.53:11",
        "SOCKS 5.255.117.127:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}