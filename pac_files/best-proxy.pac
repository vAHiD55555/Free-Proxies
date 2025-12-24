function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.71.131.131:1080",
        "SOCKS 129.153.107.221:80",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 104.248.172.167:80",
        "SOCKS 72.10.160.91:4323",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 117.74.65.207:443",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 93.91.162.222:1080",
        "SOCKS 47.251.57.165:1080",
        "SOCKS 60.13.42.157:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}