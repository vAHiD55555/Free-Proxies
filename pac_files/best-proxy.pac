function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.134.152.75:7302",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 179.96.28.58:80",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 159.65.166.126:8118",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 216.229.112.25:8080",
        "SOCKS 223.25.109.163:8199",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 47.245.117.43:80",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 125.227.225.157:3389",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}