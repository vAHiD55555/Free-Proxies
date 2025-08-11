function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.126.23.24:2846",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 116.98.187.72:1022",
        "SOCKS 201.139.115.206:8081",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 77.238.103.98:8080",
        "SOCKS 222.59.173.105:44077",
        "SOCKS 173.209.63.67:8173",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 152.231.29.135:999",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 192.177.33.68:8000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}