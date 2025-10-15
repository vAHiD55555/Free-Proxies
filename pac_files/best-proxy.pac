function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.143:4047",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 212.124.22.245:1080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 176.119.36.76:1080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 185.93.89.147:8200",
        "SOCKS 102.214.106.20:44444",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 139.59.230.8:8080",
        "SOCKS 47.91.29.151:80",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 103.54.57.117:50460",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}