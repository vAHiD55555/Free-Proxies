function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 138.124.49.149:10808",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 89.58.45.94:16951",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 113.160.188.21:1080",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 67.43.228.252:1447",
        "SOCKS 155.94.163.198:1080",
        "SOCKS 188.19.15.242:8080",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 89.58.45.94:20415",
        "SOCKS 202.74.243.43:1080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 155.94.163.202:1080",
        "SOCKS 46.10.208.106:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}