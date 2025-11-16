function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:30215",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 188.191.164.55:4890",
        "SOCKS 103.85.159.150:19201",
        "SOCKS 124.35.120.128:8080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 103.183.8.118:8090",
        "SOCKS 157.180.121.252:25399",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 89.58.45.94:40933",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 89.58.45.94:19085",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 188.165.233.121:9151",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}