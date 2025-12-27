function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 138.199.25.13:3908",
        "SOCKS 8.222.249.27:1145",
        "SOCKS 185.210.85.26:56981",
        "SOCKS 192.248.95.98:54126",
        "SOCKS 62.60.131.179:10105",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 27.254.99.183:8118",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 62.60.131.181:14807",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 193.233.254.7:1080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 89.108.83.137:1080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 222.59.173.105:44036",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 46.10.208.106:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}