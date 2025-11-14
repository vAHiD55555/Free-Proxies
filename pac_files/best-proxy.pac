function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.196.107:16379",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 89.58.45.94:51145",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 47.237.172.201:1011",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 89.58.45.94:21293",
        "SOCKS 176.119.16.40:8534",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 103.191.218.77:8199",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 8.222.214.90:33333",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 202.5.60.46:1080",
        "SOCKS 103.216.253.50:20000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}