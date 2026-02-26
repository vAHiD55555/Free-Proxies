function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 38.175.205.39:50161",
        "SOCKS 31.129.147.102:1080",
        "SOCKS 159.65.230.91:20112",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 159.65.230.91:20705",
        "SOCKS 216.238.54.50:50161",
        "SOCKS 88.210.11.250:1080",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 159.65.230.91:20291",
        "SOCKS 100.24.232.36:80",
        "SOCKS 5.149.203.190:1080",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 95.214.52.191:20000",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 221.224.56.210:10014",
        "SOCKS 46.0.205.4:1080",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 39.170.85.129:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}