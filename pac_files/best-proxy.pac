function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.18:3927",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 209.141.62.12:5555",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 27.71.132.134:16000",
        "SOCKS 45.134.14.181:1080",
        "SOCKS 13.212.216.15:52638",
        "SOCKS 116.98.187.72:1022",
        "SOCKS 171.228.160.103:1001",
        "SOCKS 27.79.134.136:16000",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 162.212.153.46:8888",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 179.96.28.58:80",
        "SOCKS 5.190.36.2:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}