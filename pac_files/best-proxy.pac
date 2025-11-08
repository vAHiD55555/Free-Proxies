function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.60.171.206:3128",
        "SOCKS 47.237.92.3:1100",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 47.237.10.40:1011",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 103.154.120.147:8080",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 157.180.121.252:21197",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 47.236.26.237:1111",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 47.239.210.106:33333",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 152.53.36.101:21945",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}