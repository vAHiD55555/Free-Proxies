function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 186.96.160.202:999",
        "SOCKS 62.60.131.205:4036",
        "SOCKS 36.255.98.168:4185",
        "SOCKS 178.170.43.106:8081",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 62.60.131.204:7799",
        "SOCKS 62.60.131.193:33611",
        "SOCKS 36.255.98.167:10805",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 62.60.131.205:5204",
        "SOCKS 36.255.98.161:15569",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 171.254.94.125:8088",
        "SOCKS 62.60.131.253:8426",
        "SOCKS 36.255.98.165:12053",
        "SOCKS 62.60.131.204:4795",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 51.38.155.24:46069",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}