function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.171.50.169:6688",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 141.253.100.34:3228",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 143.208.57.58:8080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 196.202.91.43:8080",
        "SOCKS 103.160.12.147:8199",
        "SOCKS 154.236.177.105:1977",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 149.88.71.91:8080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 115.127.36.190:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}