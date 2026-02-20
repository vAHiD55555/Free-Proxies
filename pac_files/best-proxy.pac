function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.37.175.200:22292",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 123.54.197.21:20040",
        "SOCKS 167.234.251.155:8880",
        "SOCKS 123.54.197.18:22342",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 123.54.197.52:21758",
        "SOCKS 202.62.55.43:1080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 103.135.102.161:8080",
        "SOCKS 110.235.247.206:1080",
        "SOCKS 123.54.197.49:23725",
        "SOCKS 123.54.197.20:23778",
        "SOCKS 120.77.203.0:443",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 8.142.3.145:3306",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}