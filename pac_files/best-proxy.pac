function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 14.143.222.113:10179",
        "SOCKS 47.82.104.217:1100",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 5.129.216.47:1081",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 62.60.131.195:8250",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 15.168.235.57:12185",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 46.229.66.241:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}