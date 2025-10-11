function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 106.52.2.26:1080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 199.188.204.105:8080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 157.230.220.25:4857",
        "SOCKS 65.108.203.37:28080",
        "SOCKS 119.40.84.86:8010",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 91.217.179.174:8080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 45.70.202.161:999",
        "SOCKS 222.59.173.105:45012",
        "SOCKS 194.145.200.184:3128",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 37.200.66.166:9051",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}