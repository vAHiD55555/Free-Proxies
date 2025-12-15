function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.61.38.140:1080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 45.204.208.22:60002",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 115.127.178.54:2026",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 52.140.40.92:6299",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 128.140.76.145:10243",
        "SOCKS 115.127.179.42:2026",
        "SOCKS 65.108.203.36:28080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 205.185.120.241:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}