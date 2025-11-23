function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.42.9.57:7201",
        "SOCKS 8.222.177.13:1100",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 157.180.121.252:41541",
        "SOCKS 103.189.218.158:1080",
        "SOCKS 164.163.42.2:10000",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 72.207.113.97:4145",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 164.163.42.26:10000",
        "SOCKS 8.222.135.213:1111",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 103.174.178.137:1020",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}