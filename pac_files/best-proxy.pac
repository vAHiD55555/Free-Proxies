function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 201.139.115.206:8081",
        "SOCKS 15.168.12.20:3128",
        "SOCKS 103.181.254.118:8080",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 51.159.159.73:80",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 116.105.220.34:10002",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 209.121.164.51:31147",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 116.98.190.20:1010",
        "SOCKS 27.71.228.32:3128",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 184.178.172.28:15294",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}