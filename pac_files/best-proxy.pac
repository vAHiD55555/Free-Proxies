function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.253:4016",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 62.60.131.253:5317",
        "SOCKS 36.255.98.163:7417",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 62.60.131.204:5454",
        "SOCKS 36.255.98.153:12029",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 62.60.131.253:4133",
        "SOCKS 36.255.98.161:15569",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 36.255.98.167:6984",
        "SOCKS 36.255.98.160:5722",
        "SOCKS 179.96.28.58:80",
        "SOCKS 36.255.98.165:12456",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 78.12.230.52:10025",
        "SOCKS 178.49.22.23:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}