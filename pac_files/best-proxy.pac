function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.51:5719",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 72.10.160.90:12297",
        "SOCKS 129.213.162.27:17777",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 128.140.76.145:10579",
        "SOCKS 200.70.35.2:8080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 154.236.177.101:1977",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 143.244.143.104:8080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 114.236.93.203:15800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}