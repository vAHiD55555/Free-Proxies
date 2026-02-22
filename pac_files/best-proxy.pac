function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.87.82.86:3256",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 123.54.197.16:22640",
        "SOCKS 123.54.197.52:21649",
        "SOCKS 23.19.231.152:50161",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 13.229.107.106:80",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 123.54.197.52:23444",
        "SOCKS 123.54.197.49:22083",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 123.54.197.18:22645",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 123.54.197.16:20816",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 14.56.177.162:3128",
        "SOCKS 141.94.104.205:48452",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}