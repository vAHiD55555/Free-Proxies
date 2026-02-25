function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.72.221.144:3128",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 159.65.230.91:20847",
        "SOCKS 159.65.230.91:20165",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 173.249.3.59:1080",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 185.6.9.176:8072",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}