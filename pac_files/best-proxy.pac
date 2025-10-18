function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.222.151.218:5566",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 185.93.89.182:14921",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 190.60.37.245:999",
        "SOCKS 135.181.203.208:80",
        "SOCKS 185.93.89.145:8047",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 91.206.14.184:1080",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 185.93.89.147:14299",
        "SOCKS 185.93.89.182:8009",
        "SOCKS 117.74.65.207:443",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 5.133.219.4:63434",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}