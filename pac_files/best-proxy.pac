function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.211.130.237:8192",
        "SOCKS 83.169.255.92:1080",
        "SOCKS 89.58.45.94:51145",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 8.219.234.213:1011",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 89.58.45.94:15105",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 177.10.202.115:35452",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 120.77.203.0:443",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 47.236.17.156:1011",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 143.255.43.206:999",
        "SOCKS 89.58.45.94:16725",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}