function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.167:10805",
        "SOCKS 62.60.131.179:6311",
        "SOCKS 186.96.111.214:999",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 72.10.160.94:32547",
        "SOCKS 62.60.131.203:5204",
        "SOCKS 62.60.131.203:4359",
        "SOCKS 89.19.209.217:31285",
        "SOCKS 67.43.236.18:15333",
        "SOCKS 119.81.71.27:80",
        "SOCKS 62.60.131.203:4864",
        "SOCKS 185.155.99.114:8118",
        "SOCKS 36.255.98.165:12456",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 62.60.131.253:4005",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 36.255.98.167:4403",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}