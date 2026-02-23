function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.54.57.117:50460",
        "SOCKS 217.73.117.62:1080",
        "SOCKS 14.56.107.54:3128",
        "SOCKS 37.27.100.112:443",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 85.192.56.4:48716",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 123.54.197.52:23100",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 162.144.74.156:3620",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}