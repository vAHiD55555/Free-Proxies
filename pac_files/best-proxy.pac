function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.51:5719",
        "SOCKS 222.59.173.105:44061",
        "SOCKS 89.58.45.94:34087",
        "SOCKS 41.65.160.173:1977",
        "SOCKS 37.221.193.221:31138",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 67.43.228.254:11567",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 103.154.52.5:1111",
        "SOCKS 160.19.19.23:8080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 89.58.45.94:15105",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}