function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.202.103.223:29210",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 89.58.45.94:50625",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 183.232.157.102:1011",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 89.58.45.94:10025",
        "SOCKS 202.5.60.46:1080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 45.8.88.236:1080",
        "SOCKS 182.160.125.54:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}