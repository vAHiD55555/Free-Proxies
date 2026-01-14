function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.61.38.140:1080",
        "SOCKS 8.210.17.35:8004",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 51.15.241.34:3128",
        "SOCKS 176.124.219.49:3128",
        "SOCKS 62.60.131.203:17040",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 104.248.59.38:80",
        "SOCKS 103.175.202.178:8090",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 161.202.226.194:8123",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}