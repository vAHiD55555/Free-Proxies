function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.79.184.207:16000",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 42.117.240.3:16000",
        "SOCKS 118.71.172.213:16000",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 173.209.63.68:8047",
        "SOCKS 95.47.239.65:3128",
        "SOCKS 27.79.154.11:16000",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 168.220.89.95:3128",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 54.180.143.12:1267",
        "SOCKS 27.79.192.226:16000",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 154.16.41.38:5555",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 117.74.65.207:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}