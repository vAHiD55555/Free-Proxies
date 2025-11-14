function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.128.167.129:1080",
        "SOCKS 103.70.79.3:8080",
        "SOCKS 181.49.100.190:8080",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 89.58.45.94:15105",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 43.133.207.140:1100",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 89.58.45.94:27215",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 89.58.45.94:10021",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 8.222.244.156:1100",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 89.58.45.94:10033",
        "SOCKS 115.127.83.142:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}