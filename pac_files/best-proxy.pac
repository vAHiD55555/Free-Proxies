function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.76.159.121:8080",
        "SOCKS 8.210.117.141:8888",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 59.29.182.162:8888",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 117.250.3.58:8080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 18.179.46.106:999",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 51.75.126.150:8177",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 27.79.209.49:16000",
        "SOCKS 160.153.172.248:80",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 27.71.141.120:16000",
        "SOCKS 171.237.119.194:1017",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 174.75.211.222:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}