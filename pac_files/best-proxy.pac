function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.189.112.133:3128",
        "SOCKS 212.118.52.3:1080",
        "SOCKS 185.65.254.161:8081",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 49.156.42.22:1080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 183.249.5.105:22222",
        "SOCKS 223.25.109.163:8199",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 141.0.8.240:80",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 104.238.30.39:59741",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 104.248.198.6:1080",
        "SOCKS 82.145.209.253:80",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 146.235.19.84:10864",
        "SOCKS 187.245.214.11:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}