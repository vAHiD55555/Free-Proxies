function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.222.151.218:5566",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 72.223.188.67:4145",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 176.119.36.76:1337",
        "SOCKS 170.239.43.53:4604",
        "SOCKS 72.10.160.94:9043",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 129.146.167.15:3128",
        "SOCKS 152.53.36.101:44567",
        "SOCKS 47.76.26.123:1011",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}