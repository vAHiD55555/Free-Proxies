function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.59.38:80",
        "SOCKS 115.127.182.10:2589",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 190.97.231.0:999",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 67.205.190.164:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}