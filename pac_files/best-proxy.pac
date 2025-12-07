function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.44.182.158:400",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 3.14.227.50:80",
        "SOCKS 72.10.160.174:10301",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 138.68.240.213:3128",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 216.229.112.25:8080",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 38.183.144.18:1080",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 98.190.102.40:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}