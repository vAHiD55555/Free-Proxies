function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.49.22.23:1080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 37.221.193.221:14325",
        "SOCKS 152.53.36.101:26527",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 157.180.121.252:59089",
        "SOCKS 152.53.36.101:42869",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 47.237.28.20:1100",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 103.158.253.169:8199",
        "SOCKS 103.139.99.202:8080",
        "SOCKS 47.237.132.36:1011",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 122.121.67.23:443",
        "SOCKS 157.180.121.252:26017",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 72.10.160.171:23173",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}