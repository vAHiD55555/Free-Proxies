function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.238.14.123:52663",
        "SOCKS 151.252.80.124:1080",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 202.62.39.87:1080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 123.54.197.16:22510",
        "SOCKS 165.154.162.230:1080",
        "SOCKS 123.54.197.16:22172",
        "SOCKS 209.38.51.97:3128",
        "SOCKS 104.248.140.6:1080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 123.54.197.18:22746",
        "SOCKS 123.54.197.51:23671",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 152.70.137.18:8888",
        "SOCKS 123.54.197.21:20705",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 123.54.197.21:20504",
        "SOCKS 123.54.197.20:22137",
        "SOCKS 146.235.19.84:10837",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}