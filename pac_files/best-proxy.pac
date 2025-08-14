function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 24.249.199.4:4145",
        "SOCKS 173.44.175.230:3128",
        "SOCKS 192.177.33.68:8000",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 222.59.173.105:44124",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 113.177.129.154:8118",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 197.232.65.40:55443",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 110.191.213.160:10809",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 212.113.112.84:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 14.39.239.79:60489",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 5.190.36.2:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}