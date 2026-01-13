function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.136.24.161:1080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 15.160.134.84:238",
        "SOCKS 192.145.31.160:4145",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 138.199.25.13:3903",
        "SOCKS 13.158.188.161:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}