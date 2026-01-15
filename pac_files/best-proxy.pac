function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.38.21:57114",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 36.255.98.160:10858",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 121.230.9.42:1080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 120.77.203.0:443",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 89.22.237.70:80",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 62.60.131.195:5077",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 115.127.83.142:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}