function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.124.167:16379",
        "SOCKS 123.54.197.20:22224",
        "SOCKS 152.53.136.194:10000",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 8.217.129.162:1080",
        "SOCKS 152.53.161.111:58367",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 123.54.197.49:22549",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 104.167.6.218:80",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 123.54.197.24:21838",
        "SOCKS 163.5.128.20:14270",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 40.192.14.136:9292",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}