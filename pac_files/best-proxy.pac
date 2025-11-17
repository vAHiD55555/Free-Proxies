function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.106.226:1088",
        "SOCKS 117.74.65.207:443",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 89.58.45.94:13067",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 176.108.146.179:1080",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 89.58.45.94:35567",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 72.10.160.172:14047",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 88.247.164.26:8090",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 203.74.125.18:8888",
        "SOCKS 41.65.160.173:1977",
        "SOCKS 89.58.45.94:25251",
        "SOCKS 176.9.238.173:47679",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}