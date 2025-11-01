function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.128.33.60:53405",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 176.108.246.18:10801",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 8.212.151.166:80",
        "SOCKS 41.223.119.156:3128",
        "SOCKS 43.205.124.165:26001",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 72.10.160.93:26517",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 103.159.96.48:1080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 103.151.30.49:1080",
        "SOCKS 128.199.37.92:1080",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 152.53.36.101:23653",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 217.160.224.54:8118",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}