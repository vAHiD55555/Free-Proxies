function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.38.155.24:46069",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 192.203.0.118:999",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 45.188.108.12:8080",
        "SOCKS 181.57.131.122:8080",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 186.116.148.52:8080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 45.126.250.46:8080",
        "SOCKS 103.118.175.107:8080",
        "SOCKS 213.35.110.67:10811",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}