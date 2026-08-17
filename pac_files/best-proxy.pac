function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.215.27.14:1080",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 34.229.113.62:1080",
        "SOCKS 103.136.107.70:1080",
        "SOCKS 153.51.241.50:999",
        "SOCKS 163.61.70.4:9000",
        "SOCKS 111.48.191.24:7890",
        "SOCKS 160.22.200.70:69",
        "SOCKS 152.89.104.11:1080",
        "SOCKS 195.239.17.185:1080",
        "SOCKS 191.252.204.85:19150",
        "SOCKS 47.236.177.236:1080",
        "SOCKS 45.133.251.223:1080",
        "SOCKS 150.242.218.137:1080",
        "SOCKS 171.25.158.95:1080",
        "SOCKS 129.153.194.16:1080",
        "SOCKS 78.153.155.49:8080",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 85.209.132.156:8000",
        "SOCKS 72.249.206.158:55555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}