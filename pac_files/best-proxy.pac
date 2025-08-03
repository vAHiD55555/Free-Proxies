function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.162.180:42824",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 160.187.174.38:8080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 51.20.192.194:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}