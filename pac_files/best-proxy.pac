function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.169.46.116:1090",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 182.53.202.208:8080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 78.12.223.246:2724",
        "SOCKS 203.202.243.196:1088",
        "SOCKS 202.62.42.230:1080",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 103.151.74.29:2025",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 36.255.98.177:13136",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}