function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.137:1020",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 1.234.153.14:80",
        "SOCKS 34.1.0.124:8123",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 34.236.148.220:10081",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 138.199.25.13:3905",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 72.205.0.93:4145",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 188.120.245.247:12432",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}