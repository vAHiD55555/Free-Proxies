function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 140.237.14.92:4216",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 62.60.131.181:29059",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 47.81.14.7:3128",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 124.248.168.187:1080",
        "SOCKS 62.60.131.179:12979",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 35.182.97.107:80",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 62.60.131.184:4061",
        "SOCKS 202.62.42.92:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}