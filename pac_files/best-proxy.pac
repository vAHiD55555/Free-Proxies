function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 119.81.71.27:8123",
        "SOCKS 119.81.71.27:80",
        "SOCKS 104.248.59.38:80",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 13.70.6.6:50161",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 124.243.151.58:50161",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 119.81.189.194:80",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 154.64.232.9:58367",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 125.128.12.24:3128",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 119.81.189.194:8123",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}