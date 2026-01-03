function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.105.107:16379",
        "SOCKS 43.167.227.71:6006",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 138.199.25.13:3909",
        "SOCKS 62.60.131.185:5678",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 46.150.102.26:1080",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 43.133.21.105:6006",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 43.167.206.52:6006",
        "SOCKS 62.60.131.189:28025",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 43.167.232.127:6006",
        "SOCKS 43.133.6.98:6006",
        "SOCKS 36.255.98.177:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}