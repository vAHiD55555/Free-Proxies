function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:37759",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 89.58.45.94:25251",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 18.60.222.217:57032",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 89.58.45.94:38245",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 160.19.16.86:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}