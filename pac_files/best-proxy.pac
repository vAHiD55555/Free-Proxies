function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 18.188.141.177:1145",
        "SOCKS 157.15.62.23:8085",
        "SOCKS 103.132.52.32:8080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 115.231.181.40:8128",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 82.26.74.193:9004",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 171.238.103.65:1112",
        "SOCKS 152.53.171.242:47671",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 152.53.171.242:28359",
        "SOCKS 178.49.22.23:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}