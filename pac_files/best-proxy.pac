function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.171.50.169:6688",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 89.58.45.94:10039",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 89.58.45.94:42779",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 89.58.45.94:51421",
        "SOCKS 72.10.160.92:30375",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 204.199.140.17:999",
        "SOCKS 109.196.140.199:1080",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 193.247.81.167:1080",
        "SOCKS 37.221.193.221:11714",
        "SOCKS 89.58.45.94:40145",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 147.75.34.74:10086",
        "SOCKS 104.248.197.67:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}