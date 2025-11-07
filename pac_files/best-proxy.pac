function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 184.185.2.45:4145",
        "SOCKS 37.221.193.221:50955",
        "SOCKS 152.53.36.101:20089",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 37.221.193.221:12512",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 47.237.132.36:33333",
        "SOCKS 120.77.203.0:443",
        "SOCKS 116.106.77.56:30533",
        "SOCKS 152.53.36.101:18301",
        "SOCKS 87.117.11.57:1080",
        "SOCKS 79.133.183.196:8080",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 152.53.36.101:12345",
        "SOCKS 152.53.36.101:35499",
        "SOCKS 37.221.193.221:31433",
        "SOCKS 37.221.193.221:13683",
        "SOCKS 176.9.238.173:47679",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}