function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 65.108.159.129:8081",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 8.212.153.179:8080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 13.229.107.106:80",
        "SOCKS 94.31.176.234:10808",
        "SOCKS 213.35.110.67:10889",
        "SOCKS 129.153.112.184:2383",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 213.35.110.67:10921",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 84.17.35.129:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}