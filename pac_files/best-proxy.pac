function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.64.130:16379",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 185.93.89.144:4067",
        "SOCKS 185.93.89.144:4078",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 112.78.131.2:8080",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 185.93.89.144:4270",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 201.218.150.4:999",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 40.192.27.104:41",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}