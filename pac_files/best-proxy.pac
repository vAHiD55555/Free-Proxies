function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.229.79.217:3128",
        "SOCKS 47.236.43.196:1122",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 152.53.36.101:20059",
        "SOCKS 116.98.50.140:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 8.218.36.221:1100",
        "SOCKS 152.53.36.101:26571",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 160.25.8.148:11011",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 152.53.36.101:52195",
        "SOCKS 117.74.65.207:443",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 40.192.38.216:5678",
        "SOCKS 157.180.121.252:16293",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}