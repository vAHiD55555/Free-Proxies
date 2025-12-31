function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.98.229.229:1005",
        "SOCKS 47.236.232.181:1111",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 5.75.235.252:25161",
        "SOCKS 164.163.42.26:10000",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 129.150.39.242:8118",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 72.10.160.170:4197",
        "SOCKS 212.113.109.197:2080",
        "SOCKS 5.75.235.252:52821",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 103.239.201.33:58765",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 220.128.223.136:8273",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}