function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.163:4439",
        "SOCKS 62.60.131.204:6040",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 62.60.131.204:8131",
        "SOCKS 139.59.1.14:80",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 36.255.98.154:4251",
        "SOCKS 62.60.131.203:4060",
        "SOCKS 94.230.127.180:1080",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 62.60.131.253:4005",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 36.255.98.165:4201",
        "SOCKS 203.76.98.21:45958",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 36.255.98.160:6690",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}