function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.238.102.99:1092",
        "SOCKS 171.234.50.255:5516",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 37.192.133.82:1080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 157.180.121.252:14455",
        "SOCKS 171.238.88.218:1054",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 188.120.245.247:12432",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}