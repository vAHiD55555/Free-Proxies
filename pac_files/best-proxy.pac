function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 139.59.7.217:36590",
        "SOCKS 37.59.110.73:80",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 195.39.233.14:44567",
        "SOCKS 147.45.248.195:3128",
        "SOCKS 62.60.131.194:38664",
        "SOCKS 170.239.205.74:8080",
        "SOCKS 157.66.16.38:8070",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 66.135.227.178:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}