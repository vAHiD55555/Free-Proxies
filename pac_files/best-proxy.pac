function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.255.252:1080",
        "SOCKS 14.56.107.94:3128",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 192.210.150.44:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 123.54.197.21:20481",
        "SOCKS 193.233.254.38:1080",
        "SOCKS 123.54.197.16:22968",
        "SOCKS 123.54.197.19:21193",
        "SOCKS 186.137.21.165:6881",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 147.75.34.105:443",
        "SOCKS 61.72.221.234:3128",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 37.27.100.107:443",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 167.235.155.77:47287",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}